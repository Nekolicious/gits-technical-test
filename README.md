# About
Answer for Back-end GITS.ID Technical Test.

# Table of Contents
1. [Q1 - A000124 Triangle numbers](#q1---a000124-triangle-numbers)
2. [Q2 - Dense Rank](#q2---dense-rank)
3. [Q3 - Balanced Bracket](#q3---balanced-bracket)
    1. [Analysis](#analysis)
   

## Q1 - A000124 Triangle numbers
Output Test:
![{F9C9C97B-0E87-4639-9BD8-3D891C7130B1}](https://github.com/user-attachments/assets/b7dfd42e-7e06-4dc4-816f-cbdffbc52baa)
![{A6A3AA7E-102C-45D7-A234-B98579DDE1EA}](https://github.com/user-attachments/assets/d72ad70c-dee4-4b4e-b448-4f94bf2e1cf1)

## Q2 - Dense Rank
Output Test:
![{9C8C6398-B29B-4F67-BA83-06B1F6D024F6}](https://github.com/user-attachments/assets/5b54f4db-cfff-4c9f-b7b1-44d7544e6787)
![{D4AD9B10-A884-4601-90F5-933C39CD7128}](https://github.com/user-attachments/assets/71a65571-add0-4d5e-b605-8011b68318bb)
![{21F7C764-457F-44FF-9873-803CBF7E24E7}](https://github.com/user-attachments/assets/4e794ff9-f8de-45f6-82f3-45f639f93503)

## Q3 - Balanced Bracket
Output Test:
![{D7FE6CBB-4535-46B2-9628-6AA4ADC7DF8B}](https://github.com/user-attachments/assets/c6f0e665-e2a3-4b0f-bbae-68ed09d6e1d5)
![{AA0CD4E5-AAEC-4EBC-A72F-FC0BA5EAFD20}](https://github.com/user-attachments/assets/295c848c-37b6-4e0b-b687-03f99e2aa36f)
![{928A6671-2EAB-4148-B94A-F6F630B5C9AA}](https://github.com/user-attachments/assets/aacc3907-1bee-49f0-b652-1e1fe3d6273b)

### Analysis
1. Iterate each character in `str`
    - This function will iterate each character inside `str` input.
    - If `str` length is `n`, then loop will run `n` times.
    - Every iteration will determine if the character is an **open bracket** (which needs to be added to the stack) or **closed bracket** (which needs to be matched with the stack).
2. Stack operation
    - Every operation on the stack (both push and pop) has a time complexity of O(1), as the stack is a data structure that supports such operations in constant time.
3. Search in `brackets` objects
    - For each character that is an open bracket, perform a search in the `brackets` object to find a close parenthesis pair. This search is O(1) because the `brackets` object is a hash table data structure.
    - For close bracket characters, check if they are in the values of the `brackets` object. This operation is also O(1) because use of `Object.values(brackets)` which returns an array containing the values of the closing brackets. However, searching inside the array using `Object.values(brackets)` is O(1) because there are only 3 pairs of brackets that can be matched (open brackets and close brackets).
