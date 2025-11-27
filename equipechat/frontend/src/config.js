function getConfig(name, defaultValue = null) {
    // 1️⃣ Priorizar variables de entorno de Docker (process.env)
    if (typeof process !== 'undefined' && process.env && process.env[name]) {
        return process.env[name];
    }

    // 2️⃣ Si no existen en process.env, usar window.ENV (para frontend runtime)
    if (typeof window !== 'undefined' && window.ENV !== undefined) {
        return window.ENV[name] || defaultValue;
    }

    // 3️⃣ Valor por defecto
    return defaultValue;
}


export function getBackendUrl() {
    // Default to localhost:8080 if not configured
    const url = getConfig('REACT_APP_BACKEND_URL', 'http://backend:8080');
    
    // If we're in development and no URL is set, use relative path (proxy will handle it)
    if (!url && process.env.NODE_ENV === 'development') {
        return '';
    }
    
    return url;
}

export function getHoursCloseTicketsAuto() {
    return getConfig('REACT_APP_HOURS_CLOSE_TICKETS_AUTO');
}

export function getFrontendPort() {
    return getConfig('SERVER_PORT');
}

export function getPrimaryColor() {
    return getConfig("REACT_APP_PRIMARY_COLOR");
}

export function getPrimaryDark() {
    return getConfig("REACT_APP_PRIMARY_DARK");
}

export function getNumberSupport() {
    return getConfig("REACT_APP_NUMBER_SUPPORT");
}