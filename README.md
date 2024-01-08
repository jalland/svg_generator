# Module 10 Challenge

## Description

This application takes in user input to create a svg image that has (1) a shape with a specific color and (2) text overlaid on the shape with a specific color. The output svg file is saved in the ./examples directory and can be viewed on a browser. 

## Git code
https://github.com/jalland/svg_generator 

## Example svg image
Look in ./examples.logo.svg

## Video Recording
The screen recording of this application's functionality is here:

https://drive.google.com/file/d/1YyzS7X0Qt6pEPMAWZlsAdg7H95uq95BG/view



## User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

