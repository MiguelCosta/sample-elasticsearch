# sample-elasticsearch

## Courses

### Getting Started With Elasticsearch for .NET Developers

URL: <https://app.pluralsight.com/library/courses/elasticsearch-for-dotnet-developers/table-of-contents>

## Install Elasticsearch (docker)

```bash
> docker pull docker.elastic.co/elasticsearch/elasticsearch:6.5.4

> docker run --name my_elasticsearch -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:6.5.4
```

Server URL: <http://localhost:9200/>

VS Code plugin: <https://marketplace.visualstudio.com/items?itemName=ria.elastic>

Google Chrome plugin: <https://chrome.google.com/webstore/detail/elasticsearch-head/ffmkiejjmecolpfloofpjologoblkegm>
