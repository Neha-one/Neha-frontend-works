# How to setup Tailwind CSS

## step 01: Install Tailwind CSS

### Install tailwindcss and tailwindcss/cli via npm.(Terminal)

```
    npm install tailwindcss @tailwindcss/cli 
```

## step 02: Import Tailwind in our CSS

### Add the @import "tailwindcss"; import to your main CSS file.(src/input.css)

```
   @import "tailwindcss";
```

## step 03: Start the Tailwind CLI build process

### Run the CLI tool to scan your source files for classes and build your CSS.(Terminal)

```
   npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

## step 04:Start using Tailwind in your HTML

### Add your compiled CSS file to the <head> and start using Tailwind’s utility classes to style your content.(src/index.html)

```
   <!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```