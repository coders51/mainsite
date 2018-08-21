erl -s inets -eval 'inets:start(httpd,[{server_name,"NAME"},{document_root, "."},{server_root, "."},{mime_types,
[{"html","text/html"}, {"css","text/css"},{"js","application/x-javascript"}]},{port, 8000}]).'
