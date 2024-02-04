import requests
import json
import time
import random 

URL = "http://localhost:3000/entities"

class TestAPIResponse:
# Reset testing env
  def test_reset_test_env(self):
    db = json.load(open("../../db/dev.json", "r"))
    db['entities'] = [{
            "id": 1,
            "property": "foo"
        },
        {
            "id": 2,
            "property": "bar"
        }
    ]
    json_object = json.dumps(db, indent=2)      
    with open("../../db/dev.json", "w") as outfile:
        outfile.write(json_object)  
    assert len(db['entities']) == 2
    time.sleep(1)

  # Test GET method
  def test_get_status_code(self):
    """
    Test status code of GET method
    """
    response = requests.get(URL)
    assert response.status_code == 200

  def test_get_status_code_with_id(self):
    """
    Test status code of GET method with specified id
    """
    response = requests.get(f"{URL}/1")
    assert response.status_code == 200


  def test_get_content_with_id(self):
    """
    Test content of response GET method with specified id
    """
    response = requests.get(f"{URL}/1")
    id_number = response.json()['id']
    property = response.json()['property']
    assert id_number == 1
    assert property == 'foo'

  # Test POST method
  def test_post_status_code(self):
    """
    Test status code of POST method
    """
    response = requests.post(URL)
    assert response.status_code == 201

  def test_post_is_added(self):
    """
    Test whether the new item has been added, result list length should be up by 1
    """
    initial_len = len(requests.get(URL).json())
    response = requests.post(URL)
    result_len = len(requests.get(URL).json())
    assert result_len - initial_len == 1

  # Test PUT method
  def test_put_status_code(self):
    """
    Test status code of PUT method
    """
    response = requests.put(f"{URL}/1")
    assert response.status_code == 200

  def test_put_content(self):
    """
    Test functional PUT method
    """
    response = requests.put(f"{URL}/1")
    response = requests.get(f"{URL}/1")
    assert response.json().get("property") == None

  # Test DELETE method
  def test_delete_status_code(self):
    """
    Test status code of DELETE method
    """
    reponse = requests.delete(f"{URL}/1")
    assert reponse.status_code == 200

  def test_delete_functional(self):
    """
    Test DELETE method removes item
    """
    DELETE_ID = 2
    response = requests.delete(f"{URL}/{DELETE_ID}")
    response = requests.get(f"{URL}")
    id_lst = response.json()
    for id in id_lst:
        if id['id'] == DELETE_ID:
            assert False
    assert True

  def test_id_uniqueness(self):
    # POST for random number of times
    random_num = random.randint(50, 100)
    for i in range(random_num):
        requests.post(URL)
        
    id_lst = [item['id'] for item in requests.get(URL).json()]
    assert len(set(id_lst)) == len(id_lst)

  def test_reset_test_env_to_default(self):
    db = json.load(open("../../db/dev.json", "r"))
    db['entities'] = [{
            "id": 1,
            "property": "foo"
        },
        {
            "id": 2,
            "property": "bar"
        }
    ]
    json_object = json.dumps(db, indent=2)      
    with open("../../db/dev.json", "w") as outfile:
        outfile.write(json_object)  
    assert len(db['entities']) == 2
    time.sleep(1)
