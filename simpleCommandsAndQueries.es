
// Configuration
GET /

// Show all indexes
GET /_cat/indices

// Create index "my_blog" with "post" schema
PUT /my_blog
{
    "settings": {
        "index": {
            "number_of_shards": 5
        }
    },
    "mappings": {
        "post": {
            "properties": {
                "user_id": {
                    "type": "integer"
                },
                "post_text": {
                    "type": "text"
                },
                "post_date": {
                    "type": "date",
                    "format": "YYYY-MM-DD"
                }
            }
        }
    }
}

// Get mapping
GET /my_blog/_mapping

// Create a new document (new post on my_blog)
POST /my_blog/post
{
    "post_date": "2019-01-22",
    "post_text": "My first post!",
    "user_id": 10
}

POST /my_blog/post
{
    "post_date": "2019-01-25",
    "post_text": "My second post!",
    "user_id": 10
}

POST /my_blog/post
{
    "post_date": "2019-01-25",
    "post_text": "Another blog post",
    "user_id": 2
}

// Get all posts
GET /my_blog/post/_search

// Get by id
GET /my_blog/post/sWCjdmgBjl_k0P2CMICw

// Create a document with _id
POST /my_blog/post/1
{
    "post_date": "2019-02-25",
    "post_text": "February post",
    "user_id": 2
}

GET /my_blog/post/1

// Delete a index
DELETE /my_blog

// Create index "my_blog" with "_source=false"
PUT /my_blog
{
    "settings": {
        "index": {
            "number_of_shards": 5
        }
    },
    "mappings": {
        "post": {
            "_source": {
                "enabled": false
            },
            "properties": {
                "user_id": {
                    "type": "integer",
                    "store": true
                },
                "post_text": {
                    "type": "text"
                },
                "post_date": {
                    "type": "date",
                    "format": "YYYY-MM-DD"
                }
            }
        }
    }
}

// GET document by id with fields
GET /my_blog/post/1?stored_fields=user_id

// Search all post where text contains "my"
GET /my_blog/post/_search?q=post_text:my

// Logs example
PUT /eventlog-2019-01-22
{
    "mappings": {
        "event": {
            "properties": {
                "error": {
                    "type": "text"
                }
            }
        }
    }
}

PUT /eventlog-2019-01-23
{
    "mappings": {
        "event": {
            "properties": {
                "error": {
                    "type": "text"
                }
            }
        }
    }
}

GET /_cat/indices

POST /eventlog-2019-01-22/event
{
    "error": "error 1"
}

POST /eventlog-2019-01-23/event
{
    "error": "error 2"
}

GET /eventlog-2019-01-22/_search

GET /eventlog-2019-01-23/_search

POST /_aliases
{
    "actions": [
        {
            "add": {
                "index": "eventlog-2019-01-22",
                "alias": "eventlog"
            }
        },
        {
            "add": {
                "index": "eventlog-2019-01-23",
                "alias": "eventlog"
            }
        }
    ]
}

GET /eventlog/_search
