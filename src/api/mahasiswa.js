import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:2500",
});

const apis = {
    getMahasiswa: () => api.get('/mahasiswa'),
    getMahasiswaByNim: (nim) => api.get(`/mahasiswa/${nim}`),
    insertMahasiswa: (data) => api.post('/mahasiswa', data),
    updateMahasiswa: (nim, data) => api.put(`/mahasiswa/${nim}`, data),
    deleteMahasiswa: (nim) => api.delete(`/mahasiswa/${nim}`)
}

export default apis;