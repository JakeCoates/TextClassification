# TextClassification
---

## Goal:

An app that classifies text in one of three ways: `URGENT`, `NOT URGENT` or `UNKNOWN`.

The classification depends on the number of words found in the text from the following lists. 
 - If the input text contains more List A words than List B words, the text will be classified as URGENT.
 - If it contains more List B words than List A words, it will be classified as NOT URGENT.
 - Otherwise, it will be classified as UNKNOWN.

### List A
- Alert
- Critical
- Immediate
- Important
- Urgent
- Warning

### List B
- Clear
- Good
- Nothing
- OK
- Quiet


# Getting Started

## pre-requisite
`npm install`

## modifying lists
Modify the file `classification-lists.json`

## classificationClient
`npm run client`

## classification-server
`npm run server`

# Tools

## Swagger docs
Swagger documentation can be found at /api-docs

# Improvements

## server
In the server I would add a testing framework and unit tests to validate my work

## client
I would build out some spec files with unit testing
I would develop the colour schemes to not be default ionic
I would implement a dark mode as I removed it as it didn't look nice with default colour scheme
I would wireframe a solution first and demo that solution before implementing