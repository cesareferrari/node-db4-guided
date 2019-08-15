### Problem

A client has hired you to track zoo animals.
For each animal, you must track that their name, species,
and all zoos in which they have resided (including zoo name and address).
Determine the database tables necessary to track this information.
Label any relationships between table.

Zoos:
- id
- zoo_name
- address

Species:
- id
- species_name

Animals:
- id
- animal_name
- species_id

zoo_animals:
- zoo_id
- animal_id

Table1_table2(plural)