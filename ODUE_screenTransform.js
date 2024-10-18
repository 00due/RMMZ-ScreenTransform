

/*:
 * @plugindesc (Ver 1.5) Transform the screen with a variety of animations.
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
 * @command cshk2
 * @text Smooth camera shake
 * @desc Smooth camera shake, because the original one is just bad.
 * 
 * @arg duration
 * @text Shake duration
 * @desc Duration of the animation in frames (0 = infinite).
 * @type number
 * @default 60
 * @min 0
 * 
 * @arg endDuration
 * @text Duration to end
 * @desc How quickly the shake will stop (if not using infinite shake)
 * @default 60
 * @min 1
 * 
 * @arg magnitude
 * @text Shake magnitude
 * @desc How much the screen will shake.
 * @type number
 * @default 25
 * 
 * @arg speed
 * @text Shake speed
 * @desc How quickly does the screen shake
 * @default 100
 * @min 1
 * 
 * @arg layer
 * @text Use on
 * @desc Where to apply the transformation. (READ HELP BEFORE USING!)
 * @type select
 * @option Map only
 * @value 0
 * @option Fullscreen
 * @value 1
 * @option Map without parallax
 * @value 3
 * @default 0
 * 
 * 
 * @command endShake
 * @text End shake
 * @desc Stop camera shake.
 * 
 * @arg duration
 * @text Duration
 * @desc Duration of which it takes for shake to end.
 * @type number
 * @default 60
 * @min 1
 * 
 * @arg layer
 * @text layer
 * @desc Reset which layer? (Fullscreen DOES NOT include previous layers!)
 * @type select
 * @option Map only
 * @value 0
 * @option Fullscreen
 * @value 1
 * @option Map without parallax
 * @value 3
 * @default 0
 * 
 * 
 * 
 * @command saveScale
 * @text Save scale
 * @desc Save the current scale of the screen.
 * 
 * @arg layer
 * @text Save layer
 * @desc Save which layer?
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
 * @command saveRotation
 * @text Save rotation
 * @desc Save the current rotation of the screen.
 * 
 * @arg layer
 * @text Save layer
 * @desc Save which layer?
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
 * @command restoreScale
 * @text Restore scale
 * @desc Restore the saved scale of the screen.
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
 * @text Restore layer
 * @desc Restore which layer?
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
 * @command restoreRotation
 * @text Restore rotation
 * @desc Restore the saved rotation of the screen.
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
 * @text Restore layer
 * @desc Restore which layer?
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

var OD = OD || {};
OD._transform = OD._transform || {};

OD._transform.endShake = []
OD._transform.savedScale = [1.0, 1.0];
OD._transform.savedRotate = 0;

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

function getLayer(layer) {
    switch (parseInt(layer)) {
        case 1:
            return SceneManager._scene;
        case 2:
            return SceneManager._scene._spriteset;
        default:
            return SceneManager._scene._spriteset._baseSprite;
    }
}

function applyPivot(args, selectedLayer) {
    const pivotX = parseInt(args.pivotX) === -1 ? Graphics.width / 2 : parseInt(args.pivotX);
    const pivotY = parseInt(args.pivotY) === -1 ? Graphics.height / 2 : parseInt(args.pivotY);
    if (args.setPivot === "true") {
        OD._transform.setPivot(selectedLayer, pivotX, pivotY);
    }
}

let animationState = {
    scaleX: null,
    scaleY: null,
    rotate: null,
    skewX: null,
    skewY: null,
    moveX: null,
    moveY: null
};

function cancelAnimation(type) {
    if (animationState[type]) {
        cancelAnimationFrame(animationState[type]); // Properly cancel the frame
        animationState[type] = null;
    }
}

function getNewValue(easingType, frame, startValue, targetValue, duration) {
    switch (easingType) {
        case 1:
            return OD._transform.easeIn(frame, startValue, targetValue - startValue, duration);
        case 2:
            return OD._transform.easeOut(frame, startValue, targetValue - startValue, duration);
        case 3:
            return OD._transform.easeInOut(frame, startValue, targetValue - startValue, duration);
        default:
            return startValue + (targetValue - startValue) * frame / duration;
    }
}

function animate(transformFunc, startValue, targetValue, duration, easingType, animeType) {
    let frame = 0;
    const runFrames = 1000 / 60;
    let startTime = Date.now();

    cancelAnimation(animeType)

    function step() {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;

        if (elapsed > runFrames) {
            startTime = currentTime - (elapsed % runFrames);
            frame++;
            try {
                const newValue = getNewValue(easingType, frame, startValue, targetValue, duration);
                transformFunc(newValue);
            }
            catch (e) {}
        }

        if (frame < duration) {
            animationState[animeType] = requestAnimationFrame(step);
        } else {
            transformFunc(targetValue);
            animationState[animeType] = null;
        }
    }

    animationState[animeType] = requestAnimationFrame(step);
}

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
    const selectedLayer = getLayer(args.layer);
    const targetX = parseFloat(args.x);
    const targetY = parseFloat(args.y);
    const duration = parseInt(args.duration);
    const easing = parseInt(args.easing);

    applyPivot(args, selectedLayer);

    animate(
        newX => selectedLayer.scale.x = newX, 
        selectedLayer.scale.x,
        targetX,
        duration,
        easing,
        'scaleX'
    );

    animate(
        newY => selectedLayer.scale.y = newY, 
        selectedLayer.scale.y,
        targetY,
        duration,
        easing,
        'scaleY'
    );
});

PluginManager.registerCommand('ODUE_screenTransform', 'rotate', args => {
    const selectedLayer = getLayer(args.layer);
    const targetAngle = parseFloat(args.angle);
    const duration = parseInt(args.duration);
    const easing = parseInt(args.easing);

    applyPivot(args, selectedLayer);

    animate(
        newAngle => selectedLayer.angle = newAngle, 
        selectedLayer.angle,
        targetAngle,
        duration,
        easing,
        'rotate'
    );
});

PluginManager.registerCommand('ODUE_screenTransform', 'move', args => {
    const selectedLayer = getLayer(args.layer);
    const targetX = parseFloat(args.x);
    const targetY = parseFloat(args.y);
    const duration = parseInt(args.duration);
    const easing = parseInt(args.easing);

    applyPivot(args, selectedLayer);

    animate(
        newX => selectedLayer.x = newX,
        selectedLayer.x,
        targetX,
        duration,
        easing,
        'moveX'
    );

    animate(
        newY => selectedLayer.y = newY,
        selectedLayer.y,
        targetY,
        duration,
        easing,
        'moveY'
    );
});

PluginManager.registerCommand('ODUE_screenTransform', 'skew', args => {
    const selectedLayer = getLayer(args.layer);
    const targetX = parseFloat(args.x);
    const targetY = parseFloat(args.y);
    const duration = parseInt(args.duration);
    const easing = parseInt(args.easing);

    applyPivot(args, selectedLayer);

    animate(
        newX => selectedLayer.skew.x = newX,
        selectedLayer.skew.x,
        targetX,
        duration,
        easing,
        'skewX'
    );

    animate(
        newY => selectedLayer.skew.y = newY,
        selectedLayer.skew.y,
        targetY,
        duration,
        easing,
        'skewY'
    );
});

PluginManager.registerCommand('ODUE_screenTransform', 'cshk2', args => {
    let applyToLayer;
    if (parseInt(args.layer) === 1) {
        // Fullscreen
        applyToLayer = SceneManager._scene;
    }
    else if (parseInt(args.layer) === 2) {
        // Fullscreen without HUD (Disabled for now, because it's broken)
        applyToLayer = SceneManager._scene._spriteset;
    }
    else if (parseInt(args.layer) === 0) {
        // Map only (include map, characters, tileset)
        applyToLayer = SceneManager._scene._spriteset._baseSprite;
    }
    else {
        // Map without parallax
        applyToLayer = SceneManager._scene._spriteset._tilemap;
    }
    const selectedLayer = applyToLayer;
    const duration = parseInt(args.duration);
    const shakeMagnitude = parseInt(args.magnitude);
    const shakeSpeed = parseInt(args.speed) / 10;
    const start = Date.now();

    const layerOriginalPosition = [selectedLayer.x, selectedLayer.y];

    let frame = 0;
    let endDuration = parseInt(args.endDuration);
    let currentEndDuration = 0;
    let endAnimation = false;

    animateShake = function() {
        frame++;
        const elapsed = (Date.now() - start) * 0.001;
        let t = elapsed * shakeSpeed; // time factor

        const x = Math.sin(t * 1.2) * shakeMagnitude;
        const y = Math.sin(t) * shakeMagnitude;

        //Fixme: Temporary fix when transfering map. I coulnd't get it to work
        //any other way than this.
        try {
            selectedLayer.x = layerOriginalPosition[0] + x;
            selectedLayer.y = layerOriginalPosition[1] + y;
        }
        catch (e) {}
        
        
        if ((duration == 0 || frame < duration) &&
            OD._transform.endShake[0] !== selectedLayer &&
            OD._transform.endShake[1] != 0) {
            requestAnimationFrame(animateShake);
        } else {
            if (OD._transform.endShake[1] > 0) {
                endDuration = OD._transform.endShake[1];
                OD._transform.endShake = [];
            }
            requestAnimationFrame(() => endShake(t));
        }
    }
    animateShake();

    endShake = function(t) {
        if (currentEndDuration < endDuration) {
            selectedLayer.x = layerOriginalPosition[0] + Math.sin(t * 1.2) * shakeMagnitude * (endDuration + 1 - currentEndDuration) / endDuration;
            selectedLayer.y = layerOriginalPosition[1] + Math.sin(t) * shakeMagnitude * (endDuration - currentEndDuration) / endDuration;
            currentEndDuration++;
            const elapsed = (Date.now() - start) * 0.001;
            t = elapsed * shakeSpeed; // time factor
            requestAnimationFrame(() => endShake(t));
        }
        else {
            selectedLayer.x = layerOriginalPosition[0];
            selectedLayer.y = layerOriginalPosition[1];
        }
    }
});

PluginManager.registerCommand('ODUE_screenTransform', 'endShake', args => {
    let applyToLayer;
    if (parseInt(args.layer) === 1) {
        // Fullscreen   
        applyToLayer = SceneManager._scene;
    }
    else if (parseInt(args.layer) === 2) {
        // Fullscreen without HUD
        applyToLayer = SceneManager._scene._spriteset;
    }
    else if (parseInt(args.layer) === 0) {
        // Map only (include map, characters, tileset)
        applyToLayer = SceneManager._scene._spriteset._baseSprite;
    }
    else {
        // Map without parallax
        applyToLayer = SceneManager._scene._spriteset._tilemap;
    }
    const selectedLayer = applyToLayer;
    const duration = parseInt(args.duration);
    OD._transform.endShake = [selectedLayer, duration];
});

PluginManager.registerCommand('ODUE_screenTransform', 'saveScale', args => {
    const selectedLayer = getLayer(args.layer);
    OD._transform.savedScale = [selectedLayer.scale.x, selectedLayer.scale.y];
});

PluginManager.registerCommand('ODUE_screenTransform', 'saveRotation', args => {
    const selectedLayer = getLayer(args.layer);
    OD._transform.savedRotate = selectedLayer.angle;
});

PluginManager.registerCommand('ODUE_screenTransform', 'restoreScale', args => {
    const selectedLayer = getLayer(args.layer);
    const targetX = OD._transform.savedScale[0];
    const targetY = OD._transform.savedScale[1];
    const duration = parseInt(args.duration);
    const easing = parseInt(args.easing);

    applyPivot(args, selectedLayer);

    animate(
        newX => selectedLayer.scale.x = newX, 
        selectedLayer.scale.x,
        targetX,
        duration,
        easing,
        'scaleX'
    );

    animate(
        newY => selectedLayer.scale.y = newY, 
        selectedLayer.scale.y,
        targetY,
        duration,
        easing,
        'scaleY'
    );
});

PluginManager.registerCommand('ODUE_screenTransform', 'restoreRotation', args => {
    const selectedLayer = getLayer(args.layer);
    const targetAngle = OD._transform.savedRotate;
    const duration = parseInt(args.duration);
    const easing = parseInt(args.easing);

    applyPivot(args, selectedLayer);

    animate(
        newAngle => selectedLayer.angle = newAngle, 
        selectedLayer.angle,
        targetAngle,
        duration,
        easing,
        'rotate'
    );
});

PluginManager.registerCommand('ODUE_screenTransform', 'reset', args => {
    const selectedLayer = getLayer(args.layer);
    selectedLayer.scale.x = 1;
    selectedLayer.scale.y = 1;
    selectedLayer.angle = 0;
    selectedLayer.skew.x = 0;
    selectedLayer.skew.y = 0;
    selectedLayer.x = 0;
    selectedLayer.y = 0;
    selectedLayer.pivot.set(0, 0);
});
