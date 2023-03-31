import {useAuth0} from "@auth0/auth0-react";


export function useApiClient() {
    const { getAccessTokenSilently } = useAuth0();

    async function get(resource) {
        const token = await getAccessTokenSilently();

        return fetch(resource, {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then(response => response.json())
    }

    async function post(resource, data) {
        const token = await getAccessTokenSilently();
        return fetch(resource, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify(data)
        });
    }

    async function deleteResource(resource) {
        const token = await getAccessTokenSilently();
        return fetch(resource, {
            method: 'delete',
            headers: {
                Authorization: "Bearer " + token
            }
        });
    }

    function getContainers() {
        return get("/api/v1/containers");
    }

    function createContainer(container) {
        return post('/api/v1/containers', container);
    }

    function createItem(item) {
        return post("/api/v1/items", item);
    }

    function deleteContainer(container) {
        return deleteResource(`/api/containers/${container.id}`);
    }

    function deleteItem(item) {
        return deleteResource(`/api/items/${item.id}`);
    }

    return {
        getContainers,
        createContainer,
        createItem,
        deleteContainer,
        deleteItem
    }
}