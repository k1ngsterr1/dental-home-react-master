#!/bin/bash

# Find all .tsx files that contain MDBCheckbox usage
FILES=$(find . -name "*.tsx" -type f -exec grep -l "<MDBCheckbox" {} \;)

echo "Found files with MDBCheckbox usage:"
echo "$FILES"

# Create a backup and replace MDBCheckbox usage
for file in $FILES; do
    echo "Processing: $file"
    # Create backup
    cp "$file" "$file.backup"
    
    # Replace MDBCheckbox with regular HTML input
    # This is a basic replacement - you may need to adjust based on actual usage
    sed -i '' '
        s/<MDBCheckbox/<!-- MDBCheckbox replaced with HTML input -->\n                      <div className="form-check">\n                        <input\n                          className="form-check-input"\n                          type="checkbox"/g
        s/name="[^"]*"//g
        s/value="[^"]*"//g
        s/id="\([^"]*\)"/id="\1"/g
        s/label="\([^"]*\)"/\/>\n                        <label className="form-check-label" htmlFor="\1">\n                          \1\n                        <\/label>/g
        s/defaultChecked/defaultChecked/g
        s/\/>/\/>\n                      <\/div>/g
    ' "$file"
done

echo "MDBCheckbox usage fixes completed"
