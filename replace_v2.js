const fs = require('fs');
const path = require('path');

const directories = ['src/app', 'src/components'];

const headingRegex = /(<h[1-6][^>]*className=["'][^"']*?)(text-foreground)([^"']*?["'][^>]*>)/g;
const boldRegex = /(<h[1-6][^>]*className=["'][^"']*?)(font-semibold|font-bold)([^"']*?["'][^>]*>)/g;

function processFile(filepath) {
    let content = fs.readFileSync(filepath, 'utf-8');
    const originalContent = content;
    
    // 1. Update Headings: text-foreground -> text-primary dark:text-white
    let newContent;
    while (true) {
        newContent = content.replace(headingRegex, '$1text-primary dark:text-white$3');
        if (newContent === content) break;
        content = newContent;
    }
        
    // 2. Update Headings: font-bold/semibold -> font-extrabold tracking-tight
    while (true) {
        newContent = content.replace(boldRegex, '$1font-extrabold tracking-tight$3');
        if (newContent === content) break;
        content = newContent;
    }

    // 3. Gold -> Accent Replacements globally
    content = content.replace(/\bgradient-text-gold\b/g, 'text-accent');
    content = content.replace(/\btext-gold\b/g, 'text-accent');
    content = content.replace(/\bbg-gold\b/g, 'bg-accent');
    content = content.replace(/\bborder-gold\b/g, 'border-accent');
    content = content.replace(/\bbg-gold\//g, 'bg-accent/');
    content = content.replace(/\bborder-gold\//g, 'border-accent/');
    
    // 4. Paragraph readability upgrade
    content = content.replace(/text-sm text-muted-foreground leading-relaxed/g, 'text-base text-muted-foreground leading-loose');
    
    if (content !== originalContent) {
        fs.writeFileSync(filepath, content, 'utf-8');
        console.log(`Updated ${filepath}`);
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filepath = path.join(dir, file);
        const stat = fs.statSync(filepath);
        if (stat.isDirectory()) {
            walkDir(filepath);
        } else if (filepath.endsWith('.tsx')) {
            processFile(filepath);
        }
    }
}

directories.forEach(d => {
    if (fs.existsSync(d)) {
        walkDir(d);
    }
});
