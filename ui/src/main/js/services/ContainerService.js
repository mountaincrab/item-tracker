
class ContainerService {
  getContainers() {
    return fetch("/api/containers")
      .then(response =>
        response.json())
      .then(response =>
        response._embedded.containers.map(container => {
          return {
            id: container.id,
            name: container.name,
            description: container.description,
            items: container.items.map(item => {
              return {
                id: item.id,
                name: item.name,
                description: item.description
              }
            })
          }
        })
      );
  }

  createContainer(container) {
    return fetch('/api/containers', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(container)
    });
  }

  createItem(item) {
    return fetch('/api/items', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    });
  }

  deleteContainer(container) {
    return fetch(`/api/containers/${container.id}`, {
      method: 'delete'
    });
  }

  deleteItem(item) {
    return fetch(`/api/items/${item.id}`, {
      method: 'delete'
    });
  }



}

const instance = new ContainerService();

export default instance;