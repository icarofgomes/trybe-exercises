SELECT st.first_name, st.last_name, ad.address
FROM sakila.staff AS st
INNER JOIN sakila.address AS ad
ON st.address_id = ad.address_id;
