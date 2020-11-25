## Description

Simple App to trigger SNS events using APIs

## Installation

```bash
$ npm install
```

## Running the app

````bash
# launch the app
$ npm run start

## Test

```

call API --

POST http://localhost:3000/event
Payload -
{
    "event" : <EVENT NAME>,
    "message" : <MESSAGE>
}
````
