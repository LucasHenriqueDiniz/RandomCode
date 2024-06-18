import json

# Simulação de um JSON de entrada como uma string
json_data = """
[[1,[{
  "targetChange": {
    "targetChangeType": "ADD",
    "targetIds": [
      2
    ]
  }
}]], [2,[{
  "targetChange": {
    "targetChangeType": "ADD",
    "targetIds": [
      4
    ]
  }
}]], [3,[{
  "targetChange": {
    "targetChangeType": "ADD",
    "targetIds": [
      6
    ]
  }
}]], [4,[{
  "documentChange": {
    "document": {
      "name": "projects/sos-guaiba/databases/(default)/documents/lastupdate/H2YddCKzPWsUaOlGcZst",
      "fields": {
        "at": {
          "timestampValue": "2024-05-05T21:35:51.888Z"
        }
      },
      "createTime": "2024-05-05T02:17:46.684163Z",
      "updateTime": "2024-05-05T21:36:49.796762Z"
    },
    "targetIds": [4]
  }
}]], [5,[{
  "targetChange": {
    "targetChangeType": "CURRENT",
    "targetIds": [4],
    "resumeToken": "CgkI5ZPzobz3hQM=",
    "readTime": "2024-05-05T21:37:58.905317Z"
  }
}]]
"""

# Carrega os dados JSON
data = json.loads(json_data)

# Classe para representar o PersonType
class PersonType:
    def __init__(self, id, name, cidade, status, timestamp=None, photoUrl=None, age=None, endereco=None, entrada=None, abrigo=None):
        self.id = id
        self.name = name
        self.cidade = cidade
        self.status = status
        self.timestamp = timestamp
        self.photoUrl = photoUrl
        self.age = age
        self.endereco = endereco
        self.entrada = entrada
        self.abrigo = abrigo

# Lista para armazenar objetos PersonType
persons = []

# Processa cada item no JSON
for item in data:
    element_id = item[0]
    details = item[1][0]
    
    if 'documentChange' in details:
        doc = details['documentChange']['document']
        timestamp = doc['fields']['at']['timestampValue'] if 'at' in doc['fields'] else None
        
        # Cria uma instância de PersonType
        person = PersonType(
            id=element_id,
            name=doc['name'],  # Ajuste conforme o campo correto
            cidade='cidade_exemplo',  # Valor estático ou dinâmico baseado em dados
            status=doc['updateTime'],  # Exemplo de uso do updateTime como status
            timestamp=timestamp
        )
        persons.append(person)

# Imprime os resultados
for person in persons:
    print(vars(person))