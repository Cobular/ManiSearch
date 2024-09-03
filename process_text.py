import os
import json
from typing import List, Dict, Union

def process_file(file_path: str) -> Dict[str, Union[str, int, List[str]]]:
    with open(file_path, 'r') as file:
        lines = file.readlines()
    
    name = lines[0].strip()
    items = [line.strip() for line in lines[2:] if line.strip()]
    number = int(os.path.splitext(os.path.basename(file_path))[0])
    
    return {
        "name": name,
        "number": number,
        "items": items
    }

def main():
    input_dir = "src/lib/text"
    output_dir = "src/lib/json"
    
    os.makedirs(output_dir, exist_ok=True)
    
    for filename in os.listdir(input_dir):
        if filename.endswith(".txt"):
            input_path = os.path.join(input_dir, filename)
            output_path = os.path.join(output_dir, f"{os.path.splitext(filename)[0]}.json")
            
            document = process_file(input_path)
            
            with open(output_path, 'w') as json_file:
                json.dump(document, json_file, indent=2)
    
    print("Conversion completed successfully.")

if __name__ == "__main__":
    main()