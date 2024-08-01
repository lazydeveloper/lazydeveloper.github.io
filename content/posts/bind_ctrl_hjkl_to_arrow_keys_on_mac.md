---
title: "Bind Ctrl + hjkl to arrow keys on a Mac Machine"
description: "This is how you can bind Ctrl + hjkl as arrow keys on a mac machine"
date: 2024-07-31T13:55:20-05:00
draft: false
tags: ["Vim", "Neovim", "Lua", "Linux"]
categories: ["Development"]
# weight: 4
# lastmod: 2020-01-01T16:45:40+08:00
# author: "Dillon"
# authorLink: "https://shivas.blog"
# images: []
# resources:
#   - name: "featured-image"
#   src: "featured-image.png"
# lightgallery: true
---

### What this post covers?
So instead of reaching to arrow keys, you can just use h (as left arrow), j (as down arrow) k (as up arrow) and l (as right arrow) by hoding ctrl key.

### Before we start
First things first, we need to install a free tool called Hammerspoon. This tool will allow us to configure the key bindings.

## Keyboard Settings on Mac
Navigate to System Settings > Keyboard > Keyboard Shortcut > Modifier Keys (left pane). Select your keyboard, and for the Caps Lock key, choose Control from the drop-down menu.

This will make the Caps Lock key function as the Control key (you can always change it back to Caps Lock if needed). Since I rarely use the Caps Lock function, I repurposed this key. You can select any other key from the drop-down that suits you better.

## Hammerspoon Config
If don't exist already, creat a new file at the following location  ~/.hammerspoon/init.lua and enter the following code
```
mkdir -p ~/.hammerspoon
touch ~/.hammerspoon/init.lua
```

```lua
-- Boolean to track if mappings are enabled:
local mappingsEnabled = false

-- Function to bind `hjkl` to arrow keys with Control as a modifier
function mapControlToArrows()
    local controlModifier = {"ctrl"}
    local controlShiftModifier = {"ctrl", "shift"}
    local repeatDelay = 0.1
    local repeatInterval = 0.05

    -- Bind Control + h to left arrow
    hs.hotkey.bind(controlModifier, "h", function()
        hs.eventtap.keyStroke({}, "left")
    end, nil, function()
        hs.eventtap.keyStroke({}, "left")
    end)

    -- Bind Control + j to down arrow
    hs.hotkey.bind(controlModifier, "j", function()
        hs.eventtap.keyStroke({}, "down")
    end, nil, function()
        hs.eventtap.keyStroke({}, "down")
    end)

   -- Bind Control + k to up arrow
    hs.hotkey.bind(controlModifier, "k", function()
        hs.eventtap.keyStroke({}, "up")
    end, nil, function()
        hs.eventtap.keyStroke({}, "up")
    end)

    -- Bind Control + l to right arrow
    hs.hotkey.bind(controlModifier, "l", function()
        hs.eventtap.keyStroke({}, "right")
    end, nil, function()
        hs.eventtap.keyStroke({}, "right")
    end)

    -- Bind Control + Shift + h to Shift + left arrow
    hs.hotkey.bind(controlShiftModifier, "h", function()
        hs.eventtap.keyStroke({"shift"}, "left")
    end, nil, function()
        hs.eventtap.keyStroke({"shift"}, "left")
    end)

    -- Bind Control + Shift + j to Shift + down arrow
    hs.hotkey.bind(controlShiftModifier, "j", function()
        hs.eventtap.keyStroke({"shift"}, "down")
    end, nil, function()
        hs.eventtap.keyStroke({"shift"}, "down")
    end)

    -- Bind Control + Shift + k to Shift + up arrow
    hs.hotkey.bind(controlShiftModifier, "k", function()
        hs.eventtap.keyStroke({"shift"}, "up")
    end, nil, function()
        hs.eventtap.keyStroke({"shift"}, "up")
    end)

    -- Bind Control + Shift + l to Shift + right arrow
    hs.hotkey.bind(controlShiftModifier, "l", function()
        hs.eventtap.keyStroke({"shift"}, "right")
    end, nil, function()
        hs.eventtap.keyStroke({"shift"}, "right")
    end)
end

-- Function to unbind `hjkl` from arrow keys
function unmapControlFromArrows()
    hs.hotkey.disableAll()
end

-- Function to toggle mappings
function toggleMappings()
    if mappingsEnabled then
        unmapControlFromArrows()
        hs.alert.show("Control + hjkl as arrows disabled")
    else
        mapControlToArrows()
        hs.alert.show("Control + hjkl as arrows enabled")
    end
    mappingsEnabled = not mappingsEnabled
end

-- Bind the toggle function to a hotkey (e.g., Ctrl+Shift+F1)
hs.hotkey.bind({"ctrl", "shift"}, "F1", toggleMappings)

-- Initial setup to enable mappings
toggleMappings()
```

Save the file and open the Hammerspoon application on your system to reload the configuration. Alternatively, you can reload the config by clicking the Hammerspoon icon in the taskbar and selecting "Reload Config."

This setup allows you to use the hjkl keys as arrow keys when holding the Control key, helping you code faster and stay more productive.
