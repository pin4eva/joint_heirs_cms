"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    "strapi::errors",
    // "strapi::security",
    // "strapi::cors",
    "strapi::poweredBy",
    "strapi::logger",
    "strapi::query",
    "strapi::body",
    "strapi::session",
    "strapi::favicon",
    "strapi::public",
    {
        name: "strapi::cors",
        config: {
            origin: "*",
        },
    },
    {
        name: "strapi::security",
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    "connect-src": ["'self'", "https:"],
                    "img-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
                    "media-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
                    upgradeInsecureRequests: null,
                },
            },
        },
    },
];
