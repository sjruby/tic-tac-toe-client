curl --include --request POST http://localhost:4741/games \
  --header "Authorization: Token token=4ae6610c008d55e8162f2d329398efcd" \
  --data-urlencode ""

echo

# curl --include --request PATCH http://localhost:3000/books/45 \
#   --header "Content-Type: application/json" \
#   --data '{
#     "book": {
#       "title": "an example title",
#       "author": "Rebekah"
#     }
#   }'
