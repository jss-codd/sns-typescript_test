## Description

Simple App to trigger SNS events using APIs

## Installation

```bash
$ npm install
```

## Running the app

````bash
# development
$ npm run start

## Test

```bash

call API --

POST http://localhost:3000/event
Payload -
{
    "event" : <EVENT NAME>,
    "message" : <MESSAGE>
}
````
