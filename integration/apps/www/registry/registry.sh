#!/bin/bash

source_dir="/workspace/ui/integration/indie-ui/content/docs"
dest_dir="/workspace/ui/apps/www/content/docs/components"

for file in "$source_dir"/*; do
  if [ -f "$file" ]; then
    target_file="$dest_dir/$(basename "$file")"
    if [ -f "$target_file" ]; then
      target_file="$dest_dir/copy_$(basename "$file")"
    fi
    cp "$file" "$target_file"
  fi
done

# find . -maxdepth 1 -name "copy_*" -delete
# for file in copy_*; do mv "$file" "${file#copy_}-${counter}.${file##*.}"; ((counter++)); done