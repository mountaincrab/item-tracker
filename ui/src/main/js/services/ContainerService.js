
class ItemContainerService {
  getContainers() {
    return fetch("/api/v1/containers")
      .then(response =>
        response.json());
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

const instance = new ItemContainerService();

export default instance;