curl --include --request PATCH http://localhost:4741/changepw/1 \
  --header "Authorization: Token token=0bb20054c35f5f5191de72783197b4ef" \
  --data '{
    "passwords": {
      "old": "t",
      "new": "tt"
    }
  }'

echo

# curl --include --request PATCH http://localhost:3000/books/45 \
#   --header "Content-Type: application/json" \
#   --data '{
#     "book": {
#       "title": "an example title",
#       "author": "Rebekah"
#     }
#   }'
