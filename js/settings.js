class Settings {
    
}

Settings.HORIZONTAL = "HORIZONTAL";
Settings.VERTICAL = "VERTICAL";

// Easing de las animaciones
Settings.easing = "easeInOutQuint"; // Quad, Quart, Quint, Expo, Sine

// Duración de las transiciones de los nodos
Settings.node_duration = 2500;

// Duración de las transiciones de las puertas
Settings.doors_duration = 1000;

// Easing de las transiciones de las puertas
Settings.doors_easing = "easeInOutQuad";

// Dirección de las transiciones de las puertas
Settings.doors_direction = Settings.HORIZONTAL;

// Duración de las transiciones del background
Settings.background_duration = 2500;

// Margenes del contenido de un nodo respecto de la pantalla
Settings.margin = 50;

// Offset entre nodos
Settings.offset = 10000;

// Activar / Desactivar el movimiento del background
Settings.is_background_active = true;

// Lo que se mueve el background cada vez que cambiamos de nodo (en cualquier dirección, a modo de parallax)
Settings.background_offset = 150;

// Posición inicial del background en X
Settings.background_left = -1500;

// Posición inicial del background en Y
Settings.background_top = -1500;

/***** ADVANCED  **********/
// Easing de las animaciones

Settings.custom_offsets = {
    /*
    "presentation-2":300,
    "ligero":1000,
    "opulente":1000,
    */
};

// Enable/Disable de los FPS
Settings.isFPSEnabled = true;

// Activar / Desactivar el movimiento del background
Settings.version = "0.1.2";



export default Settings;