#!/bin/bash

# Find all .tsx files that contain MDBCheckbox
FILES=$(find . -name "*.tsx" -type f -exec grep -l "MDBCheckbox" {} \;)

echo "Found files with MDBCheckbox:"
echo "$FILES"

# Fix import statements
for file in $FILES; do
    echo "Processing: $file"
    # Remove MDBCheckbox from import statement
    sed -i '' 's/import { MDBCheckbox } from "mdb-react-ui-kit";/\/\/ import { MDBCheckbox } from "mdb-react-ui-kit"; \/\/ Removed due to ES module compatibility/' "$file"
    sed -i '' 's/, MDBCheckbox//' "$file"
    sed -i '' 's/MDBCheckbox, //' "$file"
    sed -i '' 's/{ MDBCheckbox }/{}/' "$file"
    sed -i '' 's/import {} from "mdb-react-ui-kit";/\/\/ MDBCheckbox import removed/' "$file"
done

echo "Import fixes completed"
