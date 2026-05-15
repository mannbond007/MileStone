import os
import re

directories = ['src/app', 'src/components']

heading_regex = re.compile(r'(<h[1-6][^>]*className=["\'][^"\']*)(text-foreground)([^"\']*["\'][^>]*>)')
bold_regex = re.compile(r'(<h[1-6][^>]*className=["\'][^"\']*)(font-semibold|font-bold)([^"\']*["\'][^>]*>)')

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content
    
    # 1. Update Headings: text-foreground -> text-primary dark:text-white
    while True:
        new_content = heading_regex.sub(r'\1text-primary dark:text-white\3', content)
        if new_content == content:
            break
        content = new_content
        
    # 2. Update Headings: font-bold/semibold -> font-extrabold tracking-tight
    while True:
        new_content = bold_regex.sub(r'\1font-extrabold tracking-tight\3', content)
        if new_content == content:
            break
        content = new_content

    # 3. Gold -> Accent Replacements globally
    content = re.sub(r'\bgradient-text-gold\b', 'text-accent', content)
    content = re.sub(r'\btext-gold\b', 'text-accent', content)
    content = re.sub(r'\bbg-gold\b', 'bg-accent', content)
    content = re.sub(r'\bborder-gold\b', 'border-accent', content)
    
    # 4. Paragraph readability upgrade
    # From: text-sm text-muted-foreground leading-relaxed
    # To: text-base text-muted-foreground leading-loose
    content = content.replace('text-sm text-muted-foreground leading-relaxed', 'text-base text-muted-foreground leading-loose')
    
    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Updated {filepath}')

for d in directories:
    for root, _, files in os.walk(d):
        for file in files:
            if file.endswith('.tsx'):
                process_file(os.path.join(root, file))
