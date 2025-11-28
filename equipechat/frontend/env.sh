#!/bin/sh

# This script generates a configuration file for the frontend
# based on environment variables.

# Path to the output config file
CONFIG_JS_PATH="/usr/share/nginx/html/env-config.js"

# Start creating the config file
echo "window.ENV = {" > "$CONFIG_JS_PATH"

# Loop through environment variables and add ones with REACT_APP_ prefix
for var in $(env); do
  if [ "$(echo "$var" | cut -d= -f1 | grep -E '^REACT_APP_')" ]; then
    # Extract key and value
    key=$(echo "$var" | cut -d= -f1)
    # Use 'env' to get the full value, handling cases where it contains '='
    value=$(env | grep "^$key=" | cut -d= -f2-)
    
    # Append to the config file
    echo "  $key: \"$value\"," >> "$CONFIG_JS_PATH"
  fi
done

echo "}" >> "$CONFIG_JS_PATH"

echo "Configuration file generated at $CONFIG_JS_PATH"

# Execute the command passed to this script (e.g., nginx)
exec "$@"
