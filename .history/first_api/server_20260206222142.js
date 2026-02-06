const fs = require('fs');
const http = require('http');
const path = require('path');
const mimeTypes = require('mime-types');
const qs = require('qs');
const controllers = require('./controllers/ControllerLoadder').controllers;

const server = http.createServer(async (req, res) => {
    console.log(req.method, req.url);

    // ✅ Correct URL parsing
    req.parsedURL = new URL(req.url, `http://${req.headers.host}`);

    // ✅ Correct async request data
    const data = await getRequestData(req);

    // ================= API ROUTING =================
    if (req.parsedURL.pathname.startsWith('/api')) {
        const route = getAPIControllerMethodName(req);

        if (
            controllers[route.controller] &&
            typeof controllers[route.controller][route.method] === 'function'
        ) {
            const response = controllers[route.controller][route.method](data);
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            return res.end(JSON.stringify(response));
        }

        res.writeHead(404);
        return res.end('Controller or method not found');
    }

    // ================= STATIC FILES =================
    let safePath = path.normalize(req.parsedURL.pathname).replace(/^(\.\.[\/\\])+/, '');
    let filePath = path.join(__dirname, safePath);

    fs.readFile(filePath, (err, file) => {
        if (err) {
            res.writeHead(404);
            return res.end('File not found');
        }

        res.writeHead(200, {
            'Content-Type': mimeTypes.contentType(filePath) || 'text/plain'
        });
        res.end(file);
    });
});

server.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
});


// ================= HELPERS =================

function getRequestData(req) {
    return new Promise((resolve) => {
        let data = qs.parse(req.parsedURL.search.slice(1));

        if (req.method === 'GET') {
            return resolve(data);
        }

        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            try {
                Object.assign(data, JSON.parse(body));
            } catch {
                // ignore invalid JSON
            }
            resolve(data);
        });
    });
}

function getAPIControllerMethodName(req) {
    const parts = req.parsedURL.pathname.split('/');
    return {
        controller: parts[2] || 'Home',
        method: parts[3] || 'index'
    };
}
