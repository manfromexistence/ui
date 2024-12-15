#!/bin/bash

find . -name "*.jsx" | while read file; do
  mv "$file" "${file%.jsx}.tsx"
done