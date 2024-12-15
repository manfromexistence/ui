#!/bin/bash

# Initialize a counter for numbering the renamed files
counter=1

# Iterate over each file in the current directory
for file in "copy_*"
do
    # Extract the filename without the "copy_" prefix and extension
    filename="${file#copy_}"
    filename="${filename%.*}"

    # Construct the new filename with the counter and extension
    new_filename="${filename}-${counter}.${file##*.}"

    # Rename the file
    mv "$file" "$new_filename"

    # Increment the counter for the next file
    ((counter++))
done