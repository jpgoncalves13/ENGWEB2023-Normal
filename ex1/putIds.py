import json
import re

def main():
    input_file = open("plantas.json","r", encoding="utf-8")
    output_file = open("plantasAt.json", "w", encoding="utf-8")
    dataset = json.load(input_file)
    id = 0
     
    for plantas in dataset:
        plantas["_id"] = str(plantas["_id"])
        

    json.dump(dataset, output_file, indent=2, ensure_ascii = False)
    
if __name__ == '__main__':
    main()