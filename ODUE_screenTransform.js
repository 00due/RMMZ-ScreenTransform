

/*:
 * @plugindesc (Ver 1.1) Transform the screen with a variety of animations.
 * @author ODUE
 * @url https://github.com/00due/screenTransform-MZ
 * @target MZ MV
 * 
 * @help
 * This plugin allows you to transform (scale / rotate / skew / move) the screen with animations.
 * 
 * Usage:
 * Just use plugin commands to transform the screen.
 * 
 * Warning about the "Use on" / "layer" parameter:
 * The fullscreen option might temporarily break the GUI (like textbox) when using specific transformations.
 * This happens because of how RPG Maker MZ handles rendering areas outside expected bounds.
 * This plugin doesn't tell the engine that it should render more stuff, so stuff might not get
 * rendered.
 * This can happen if you use too small values too.
 * Everything will return to normal when you reset the transformations.
 * 
 * 
 * PLEASE SUBMIT ISSUES TO GITHUB INSTEAD OF YOUTUBE / RPG MAKER FORUMS!
 * - This way I can keep track of the issues and fix them more easily. I am not as active
 *   on RPG Maker forums or YouTube.
 * 
 * 
 * Terms of use:
 *
 * 1. You must give credit to ODUE
 * 2. You can freely edit this plugin to your needs. However, you must still credit me.
 * 3. This plugin is free for commercial and non-commercial projects.
 * 4. This plugin is provided as is. I'm not responsible for anything you make with this plugin.
 * 5. You can send feature requests to me on platforms such as Reddit (to u/SanttuPOIKA----).
 *    However, I have no obligation to fulfill your requests.
 * 
 * @param useScaling
 * @text Enable scale on screen w/o HUD
 * @desc Use scale on screen w/o HUD. This disables RPG Maker's default "Zoom" command.
 * @type boolean
 * @default true
 * @on yes
 * @off no
 * 
 * @command scale
 * @text Scale / strech
 * @desc Scale the screen.
 * 
 * @arg x
 * @text Scale X
 * @desc Scale screen in X direction.
 * @default 1.0
 * 
 * @arg y
 * @text Scale Y
 * @desc Scale screen in Y direction.
 * @default 1.0
 * 
 * @arg setPivot
 * @text Set pivot
 * @desc Must be on to center the screen on first run. Do not use if you want to keep "move" in current position.
 * @type boolean
 * @default true
 * 
 * @arg pivotX
 * @text Pivot X
 * @desc Pivot (center) point in X direction. Use -1 to use the center of the screen.
 * @type number
 * @default -1
 * @min -9999
 * @parent setPivot
 * 
 * @arg pivotY
 * @text Pivot Y
 * @desc Pivot (center) point in Y direction. Use -1 to use the center of the screen.
 * @type number
 * @default -1
 * @min -9999
 * @parent setPivot
 * 
 * @arg duration
 * @text Animation duration
 * @desc Duration of the animation in frames.
 * @type number
 * @default 60
 * 
 * @arg easing
 * @desc Easing type
 * @desc Ease in, ease out, ease in-out or constant speed.
 * @type select
 * @option Constant speed
 * @value 0
 * @option Ease in
 * @value 1
 * @option Ease out
 * @value 2
 * @option Ease in-out
 * @value 3
 * @default 0
 * 
 * @arg layer
 * @text Use on
 * @desc Where to apply the transformation. (READ HELP BEFORE USING!)
 * @type select
 * @option Map only
 * @value 0
 * @option Fullscreen
 * @value 1
 * @option Fullscreen w/o UI / HUD
 * @value 2 
 * @default 0
 * 
 * 
 * @command rotate
 * @text Rotate
 * @desc Rotate the screen.
 * 
 * @arg angle
 * @text Angle
 * @desc Angle in degrees.
 * @type number
 * @default 0
 * @min -9999
 * 
 * @arg setPivot
 * @text Set pivot
 * @desc Must be on to center the screen on first run. Do not use if you want to keep "move" in current position.
 * @type boolean
 * @default true
 * 
 * @arg pivotX
 * @text Pivot X
 * @desc Pivot (center) point in X direction. Use -1 to use the center of the screen.
 * @type number
 * @default -1
 * @min -9999
 * @parent setPivot
 * 
 * @arg pivotY
 * @text Pivot Y
 * @desc Pivot (center) point in Y direction. Use -1 to use the center of the screen.
 * @type number
 * @default -1
 * @min -9999
 * @parent setPivot
 * 
 * @arg duration
 * @text Animation duration
 * @desc Duration of the animation in frames.
 * @type number
 * @default 60
 * 
 * @arg easing
 * @desc Easing type
 * @desc Ease in, ease out, ease in-out or constant speed.
 * @type select
 * @option Constant speed
 * @value 0
 * @option Ease in
 * @value 1
 * @option Ease out
 * @value 2
 * @option Ease in-out
 * @value 3
 * @default 0
 * 
 * @arg layer
 * @text Use on
 * @desc Where to apply the transformation. (READ HELP BEFORE USING!)
 * @type select
 * @option Map only
 * @value 0
 * @option Fullscreen
 * @value 1
 * @option Fullscreen w/o UI / HUD
 * @value 2 
 * @default 0
 * 
 * @command move
 * @text Move
 * @desc Move the screen.
 * 
 * @arg x
 * @text Move X
 * @desc Move screen in X direction.
 * @default 0
 * 
 * @arg y
 * @text Move Y
 * @desc Move screen in Y direction.
 * @default 0
 * 
 * @arg setPivot
 * @text Set pivot
 * @desc Must be on to center the screen on first run. Do not use if you want to keep "move" in current position.
 * @type boolean
 * @default true
 * 
 * @arg pivotX
 * @text Pivot X
 * @desc Pivot (center) point in X direction. Use -1 to use the center of the screen.
 * @type number
 * @default -1
 * @min -9999
 * @parent setPivot
 * 
 * @arg pivotY
 * @text Pivot Y
 * @desc Pivot (center) point in Y direction. Use -1 to use the center of the screen.
 * @type number
 * @default -1
 * @min -9999
 * @parent setPivot
 * 
 * @arg duration
 * @text Animation duration
 * @desc Duration of the animation in frames.
 * @type number
 * @default 60
 * 
 * @arg easing
 * @desc Easing type
 * @desc Ease in, ease out, ease in-out or constant speed.
 * @type select
 * @option Constant speed
 * @value 0
 * @option Ease in
 * @value 1
 * @option Ease out
 * @value 2
 * @option Ease in-out
 * @value 3
 * @default 0
 * 
 * @arg layer
 * @text Use on
 * @desc Where to apply the transformation. (READ HELP BEFORE USING!)
 * @type select
 * @option Map only
 * @value 0
 * @option Fullscreen
 * @value 1
 * @option Fullscreen w/o UI / HUD
 * @value 2
 * @default 0
 * 
 * 
 * @command skew
 * @text Skew
 * @desc Skew the screen.
 * 
 * @arg x
 * @text Skew X
 * @desc Skew screen in X direction.
 * @default 0
 * 
 * @arg y
 * @text Skew Y
 * @desc Skew screen in Y direction.
 * @default 0
 * 
 * @arg setPivot
 * @text Set pivot
 * @desc Must be on to center the screen on first run. Do not use if you want to keep "move" in current position.
 * @type boolean
 * @default true
 * 
 * @arg pivotX
 * @text Pivot X
 * @desc Pivot (center) point in X direction. Use -1 to use the center of the screen.
 * @type number
 * @default -1
 * @min -9999
 * @parent setPivot
 * 
 * @arg pivotY
 * @text Pivot Y
 * @desc Pivot (center) point in Y direction. Use -1 to use the center of the screen.
 * @type number
 * @default -1
 * @min -9999
 * @parent setPivot
 * 
 * @arg duration
 * @text Animation duration
 * @desc Duration of the animation in frames.
 * @type number
 * @default 60
 * 
 * @arg easing
 * @desc Easing type
 * @desc Ease in, ease out, ease in-out or constant speed.
 * @type select
 * @option Constant speed
 * @value 0
 * @option Ease in
 * @value 1
 * @option Ease out
 * @value 2
 * @option Ease in-out
 * @value 3
 * @default 0
 * 
 * @arg layer
 * @text Use on
 * @desc Where to apply the transformation. (READ HELP BEFORE USING!)
 * @type select
 * @option Map only
 * @value 0
 * @option Fullscreen
 * @value 1
 * @option Fullscreen w/o UI / HUD
 * @value 2
 * @default 0
 * 
 * 
 * @command reset
 * @text Reset
 * @desc Reset the screen and all transformations to default values.
 * 
 * @arg layer
 * @text Reset layer
 * @desc Reset which layer? (Fullscreen DOES NOT include previous layers!)
 * @type select
 * @option Map only
 * @value 0
 * @option Fullscreen
 * @value 1
 * @option Fullscreen w/o UI / HUD
 * @value 2
 * @default 0
 * 
 * 
*/

/*const { createNoise2D } = require('simplex-noise');*/
/*const simplex = createNoise2D();*/

var OD = OD || {};
OD._transform = OD._transform || {};


OD._transform.easeIn = function(t, b, c, d) {
    return c*(t/=d)*t + b;
}

OD._transform.easeOut = function(t, b, c, d) {
    return -c *(t/=d)*(t-2) + b;
}

OD._transform.easeInOut = function(t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t + b;
    return -c/2 * ((--t)*(t-2) - 1) + b;
}

OD._transform.setPivot = function(layer, x, y) {
    layer.pivot.set(x, y);
    layer.x = x;
    layer.y = y;
}

// Off for now
/*Game_Interpreter.prototype.waitForTransform = function() {
    this.wait(1);
    this._index--;
}*/

// Disable updating screen scale because of plugin scale command on SceneManager._scene._spriteset
const useScaling = PluginManager.parameters('ODUE_screenTransform')['useScaling'] === 'true';
Spriteset_Base.prototype.updatePosition = function() {
    const screen = $gameScreen;
    const scale = screen.zoomScale();
    if (!useScaling) {
        this.scale.x = scale;
        this.scale.y = scale;
        this.x = Math.round(-screen.zoomX() * (scale - 1));
        this.y = Math.round(-screen.zoomY() * (scale - 1));
        this.x += Math.round(screen.shake());
    }
    
};


PluginManager.registerCommand('ODUE_screenTransform', 'scale', args => {
    let applyToLayer;
    if (parseInt(args.layer) === 1) {
        // Fullscreen
        applyToLayer = SceneManager._scene;
    }
    else if (parseInt(args.layer) === 2) {
        // Fullscreen without HUD
        applyToLayer = SceneManager._scene._spriteset;
    }
    else {
        // Map only (include map, characters, tileset)
        applyToLayer = SceneManager._scene._spriteset._baseSprite;
    }
    const selectedLayer = applyToLayer;
    const targetX = parseFloat(args.x);
    const targetY = parseFloat(args.y);
    const duration = parseInt(args.duration);
    const easing = parseInt(args.easing);
   
    const startScaleX = selectedLayer.scale.x;
    const startScaleY = selectedLayer.scale.y;
    const pivotX = parseInt(args.pivotX) === -1 ? Graphics.width / 2 : parseInt(args.pivotX);
    const pivotY = parseInt(args.pivotY) === -1 ? Graphics.height / 2 : parseInt(args.pivotY);
   
    if (args.setPivot == "true") {
        OD._transform.setPivot(selectedLayer, pivotX, pivotY);
    }

    let frame = 0;

    animateScale = function() {
        frame++;
        let newScaleX = 0;
        let newScaleY = 0;
        switch (easing) {
            case 1:
                newScaleX = OD._transform.easeIn(frame, startScaleX, targetX - startScaleX, duration);
                newScaleY = OD._transform.easeIn(frame, startScaleY, targetY - startScaleY, duration);
                break;
            case 2:
                newScaleX = OD._transform.easeOut(frame, startScaleX, targetX - startScaleX, duration);
                newScaleY = OD._transform.easeOut(frame, startScaleY, targetY - startScaleY, duration);
                break;
            case 3:
                newScaleX = OD._transform.easeInOut(frame, startScaleX, targetX - startScaleX, duration);
                newScaleY = OD._transform.easeInOut(frame, startScaleY, targetY - startScaleY, duration);
                break;
            default:
                newScaleX = startScaleX + (targetX - startScaleX) * frame / duration;
                newScaleY = startScaleY + (targetY - startScaleY) * frame / duration;
                console.log("constant speed: " + newScaleX);
                break;
        }

        selectedLayer.scale.x = newScaleX;
        selectedLayer.scale.y = newScaleY;
        if (frame < duration) {
            requestAnimationFrame(animateScale);
            
        } else {
            selectedLayer.scale.x = targetX;
            selectedLayer.scale.y = targetY;
        }
        
    }

    animateScale();
});

PluginManager.registerCommand('ODUE_screenTransform', 'rotate', args => {
    let applyToLayer;
    if (parseInt(args.layer) === 1) {
        // Fullscreen
        applyToLayer = SceneManager._scene;
    }
    else if (parseInt(args.layer) === 2) {
        // Fullscreen without HUD
        applyToLayer = SceneManager._scene._spriteset;
    }
    else {
        // Map only (include map, characters, tileset)
        applyToLayer = SceneManager._scene._spriteset._baseSprite;
    }
    const selectedLayer = applyToLayer;
    const targetAngle = parseFloat(args.angle);
    const duration = parseInt(args.duration);
    const easing = parseInt(args.easing);
    const startAngle = selectedLayer.angle;
    const pivotX = parseInt(args.pivotX) === -1 ? Graphics.width / 2 : parseInt(args.pivotX);
    const pivotY = parseInt(args.pivotY) === -1 ? Graphics.height / 2 : parseInt(args.pivotY);

    if (args.setPivot == "true") {
        OD._transform.setPivot(selectedLayer, pivotX, pivotY);
    }

    let frame = 0;

    animateRotate = function() {
        frame++;
        let newAngle = 0;
        switch (easing) {
            case 1:
                newAngle = OD._transform.easeIn(frame, startAngle, targetAngle - startAngle, duration);
                break;
            case 2:
                newAngle = OD._transform.easeOut(frame, startAngle, targetAngle - startAngle, duration);
                break;
            case 3:
                newAngle = OD._transform.easeInOut(frame, startAngle, targetAngle - startAngle, duration);
                break;
            default:
                newAngle = startAngle + (targetAngle - startAngle) * frame / duration;
                console.log("constant speed: " + newAngle);
                break;
        }

        selectedLayer.angle = newAngle;
        if (frame < duration) {
            requestAnimationFrame(animateRotate);
            
        } else {
            selectedLayer.angle = targetAngle;
        }
        
    }

    animateRotate();
});

PluginManager.registerCommand('ODUE_screenTransform', 'move', args => {
    let applyToLayer;
    if (parseInt(args.layer) === 1) {
        // Fullscreen
        applyToLayer = SceneManager._scene;
    }
    else if (parseInt(args.layer) === 2) {
        // Fullscreen without HUD
        applyToLayer = SceneManager._scene._spriteset;
    }
    else {
        // Map only (include map, characters, tileset)
        applyToLayer = SceneManager._scene._spriteset._baseSprite;
    }
    const selectedLayer = applyToLayer;
    const targetX = parseInt(args.x);
    const targetY = parseInt(args.y);
    const duration = parseInt(args.duration);
    const easing = parseInt(args.easing);
    const startX = selectedLayer.x;
    const startY = selectedLayer.y;
    const pivotX = parseInt(args.pivotX) === -1 ? Graphics.width / 2 : parseInt(args.pivotX);
    const pivotY = parseInt(args.pivotY) === -1 ? Graphics.height / 2 : parseInt(args.pivotY);
    
    if (args.setPivot == "true") {
        OD._transform.setPivot(selectedLayer, pivotX, pivotY);
    }

    let frame = 0;

    animateMove = function() {
        frame++;
        let newX = 0;
        let newY = 0;
        switch (easing) {
            case 1:
                newX = OD._transform.easeIn(frame, startX, targetX - startX, duration);
                newY = OD._transform.easeIn(frame, startY, targetY - startY, duration);
                break;
            case 2:
                newX = OD._transform.easeOut(frame, startX, targetX - startX, duration);
                newY = OD._transform.easeOut(frame, startY, targetY - startY, duration);
                break;
            case 3:
                newX = OD._transform.easeInOut(frame, startX, targetX - startX, duration);
                newY = OD._transform.easeInOut(frame, startY, targetY - startY, duration);
                break;
            default:
                newX = startX + (targetX - startX) * frame / duration;
                newY = startY + (targetY - startY) * frame / duration;
                console.log("constant speed: " + newX);
                break;
        }

        selectedLayer.x = newX;
        selectedLayer.y = newY;
        if (frame < duration) {
            requestAnimationFrame(animateMove);
            
        } else {
            selectedLayer.x = targetX;
            selectedLayer.y = targetY;
        }
    }
    animateMove();
});

PluginManager.registerCommand('ODUE_screenTransform', 'skew', args => {
    let applyToLayer;
    if (parseInt(args.layer) === 1) {
        // Fullscreen
        applyToLayer = SceneManager._scene;
    }
    else if (parseInt(args.layer) === 2) {
        // Fullscreen without HUD
        applyToLayer = SceneManager._scene._spriteset;
    }
    else {
        // Map only (include map, characters, tileset)
        applyToLayer = SceneManager._scene._spriteset._baseSprite;
    }
    const selectedLayer = applyToLayer;
    const targetX = parseFloat(args.x) / 100;
    const targetY = parseFloat(args.y) / 100;
    const duration = parseInt(args.duration);
    const easing = parseInt(args.easing);
    const startX = selectedLayer.skew.x;
    const startY = selectedLayer.skew.y;
    const pivotX = parseInt(args.pivotX) === -1 ? Graphics.width / 2 : parseInt(args.pivotX);
    const pivotY = parseInt(args.pivotY) === -1 ? Graphics.height / 2 : parseInt(args.pivotY);
    
    if (args.setPivot == "true") {
        OD._transform.setPivot(selectedLayer, pivotX, pivotY);
    }

    let frame = 0;

    animateSkew = function() {
        frame++;
        let newX = 0;
        let newY = 0;
        switch (easing) {
            case 1:
                newX = OD._transform.easeIn(frame, startX, targetX - startX, duration);
                newY = OD._transform.easeIn(frame, startY, targetY - startY, duration);
                break;
            case 2:
                newX = OD._transform.easeOut(frame, startX, targetX - startX, duration);
                newY = OD._transform.easeOut(frame, startY, targetY - startY, duration);
                break;
            case 3:
                newX = OD._transform.easeInOut(frame, startX, targetX - startX, duration);
                newY = OD._transform.easeInOut(frame, startY, targetY - startY, duration);
                break;
            default:
                newX = startX + (targetX - startX) * frame / duration;
                newY = startY + (targetY - startY) * frame / duration;
                console.log("constant speed: " + newX);
                break;
        }

        selectedLayer.skew.x = newX;
        selectedLayer.skew.y = newY;
        if (frame < duration) {
            requestAnimationFrame(animateSkew);
            
        } else {
            selectedLayer.skew.x = targetX;
            selectedLayer.skew.y = targetY;
        }
    }
    animateSkew();
});


// THIS IS HEAVILY WORK IN PROGRESS AND THE ALGORITHM IS NOT FINALIZED
/*PluginManager.registerCommand('ODUE_screenTransform', 'camShake', args => {
    let applyToLayer;
    const selectedLayer = SceneManager._scene._spriteset._baseSprite; //applyToLayer;
    const duration = 99999; // parseInt(args.duration);
    const shakeMagnitude = 25;
    const shakeSpeed = 10;
    const shakeSpeed2 = 0.3;
    const shakeDuration = 9999999;
    const start = Date.now();
    const originalX = selectedLayer.x;
    const originalY = selectedLayer.y;
    let frame = 0;

    animateShake = function() {
        frame++;
        const elapsed = (Date.now() - start) * 0.001;
        let t = elapsed * shakeSpeed; // time factor

        const noiseX = simplex(t * 0.1, 0);
        const noiseY = simplex(0, t * 0.1);
        

        const x = (noiseX + Math.sin(t * 0.3)) * shakeMagnitude;
        const y = (noiseY + Math.cos(t * 0.3)) * shakeMagnitude;
        
        selectedLayer.x = x;
        selectedLayer.y = y;
        if (frame < duration) {
            requestAnimationFrame(animateShake);
        } else {
            selectedLayer.x = 0;
            selectedLayer.y = 0;
        }
    }
    animateShake();
});*/



PluginManager.registerCommand('ODUE_screenTransform', 'reset', args => {
    let applyToLayer;
    if (parseInt(args.layer) === 1) {
        // Fullscreen
        applyToLayer = SceneManager._scene;
    }
    else if (parseInt(args.layer) === 2) {
        // Fullscreen without HUD
        applyToLayer = SceneManager._scene._spriteset;
    }
    else {
        // Map only (include map, characters, tileset)
        applyToLayer = SceneManager._scene._spriteset._baseSprite;
    }
    const selectedLayer = applyToLayer;
    selectedLayer.scale.x = 1;
    selectedLayer.scale.y = 1;
    selectedLayer.angle = 0;
    selectedLayer.skew.x = 0;
    selectedLayer.skew.y = 0;
    selectedLayer.x = 0;
    selectedLayer.y = 0;
    selectedLayer.pivot.set(0, 0);
});
