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

## classificationClient
`npm run client`

## classification-server
`npm run server`