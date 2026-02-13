# Simple Express API for Testing

A lightweight Express.js API server with basic CRUD endpoints for testing purposes.

## Features

- Health check endpoint
- GET, POST, PUT, DELETE endpoints
- JSON request/response handling
- Error handling
- Para

meterized routes

## Installation

```bash
npm install
```

## Running the Server

```bash
npm start
```

The server will run on `http://localhost:3000` by default.

You can customize the port by setting the `PORT` environment variable:

```bash
PORT=5000 npm start
```

## API Endpoints

### Health Check
- **GET** `/health` - Check if server is running

### Items
- **GET** `/api/items` - Get all items
- **GET** `/api/items/:id` - Get a specific item by ID
- **POST** `/api/items` - Create a new item (requires `name` and `value` in request body)
- **PUT** `/api/items/:id` - Update an item
- **DELETE** `/api/items/:id` - Delete an item

## Example Requests

### Health Check
```bash
curl http://localhost:3000/health
```

### Get All Items
```bash
curl http://localhost:3000/api/items
```

### Get Item by ID
```bash
curl http://localhost:3000/api/items/1
```

### Create Item
```bash
curl -X POST http://localhost:3000/api/items \
  -H "Content-Type: application/json" \
  -d '{"name": "New Item", "value": 500}'
```

### Update Item
```bash
curl -X PUT http://localhost:3000/api/items/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Updated Item", "value": 750}'
```

### Delete Item
```bash
curl -X DELETE http://localhost:3000/api/items/1
```

## Testing

You can test the API using:
- `curl` (command line)
- Postman
- Insomnia
- VS Code REST Client extension

## License

ISC
