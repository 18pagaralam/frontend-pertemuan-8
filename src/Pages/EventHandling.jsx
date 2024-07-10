import React, { useState } from 'react';

const EventHandling = () => {
  const [name, setName] = useState('');
  const [selectedOption, setSelectedOption] = useState('S1 Tekhnik Informatika');
  const [gender, setGender] = useState('Pria');
  const [alamat, setAlamat] = useState('');
  const [prestasi, setPrestasi] = useState('akademik');
  const [masukan, setMasukan] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAlamatChange = (event) => {
    setAlamat(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handlePrestasiChange = (event) => {
    setPrestasi(event.target.value);
  };

  const handleMasukanChange = (event) => {
    setMasukan(event.target.value);
  };

  const handleClick = () => {
    alert('Tombol ini diklik!');
  };

  return (
    <div className="container mt-4 ml-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Klik Saya!
      </button>

      <div className="mt-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Nama:
        </label>
        <input
          type="text"
          id="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Masukan nama Anda"
          value={name}
          onChange={handleNameChange}
        />
        <p className="text-gray-600 text-xs italic mt-2">Nama anda: {name}</p>
      </div>

      <div className="mt-4">
        <label htmlFor="alamat" className="block text-gray-700 font-bold mb-2">
          Alamat:
        </label>
        <input
          type="text"
          id="alamat"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Masukan alamat Anda"
          value={alamat}
          onChange={handleAlamatChange}
        />
        <p className="text-gray-600 text-xs italic mt-2">Alamat anda: {alamat}</p>
      </div>

      <div className="mt-8">
        <span className="block text-gray-700 font-bold mb-2">Gender:</span>
        <div className="flex flex-row items-center">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-indigo-600"
              name="gender"
              value="Pria"
              checked={gender === 'Pria'}
              onChange={handleGenderChange}
            />
            <span className="ml-2">Pria</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-indigo-600"
              name="gender"
              value="Wanita"
              checked={gender === 'Wanita'}
              onChange={handleGenderChange}
            />
            <span className="ml-2">Wanita</span>
          </label>
        </div>
        <p className="text-gray-600 text-xs italic mt-2">Gender: {gender}</p>
      </div>

      <div className="mt-8">
        <label htmlFor="program-studi" className="block text-gray-700 font-bold mb-2">
          Program studi:
        </label>
        <select
          id="program-studi"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="S1 Tekhnik Informatika">S1 Tekhnik Informatika</option>
          <option value="D3 Tekhnik Informasi">D3 Tekhnik Informasi</option>
          <option value="D3 Manajemen Informatika">D3 Manajemen Informatika</option>
        </select>
        <p className="text-gray-600 text-xs italic mt-2">Prodi: {selectedOption}</p>
      </div>

      <div className="mt-8">
        <span className="block text-gray-700 font-bold mb-2">Prestasi:</span>
        <div className="flex flex-row items-center">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-indigo-600"
              name="prestasi"
              value="akademik"
              checked={prestasi === 'akademik'}
              onChange={handlePrestasiChange}
            />
            <span className="ml-2">Akademik</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-indigo-600"
              name="prestasi"
              value="non akademik"
              checked={prestasi === 'non akademik'}
              onChange={handlePrestasiChange}
            />
            <span className="ml-2">Non Akademik</span>
          </label>
        </div>
        <p className="text-gray-600 text-xs italic mt-2">Prestasi: {prestasi}</p>
      </div>

      <div className="mt-4">
        <label htmlFor="masukan" className="block text-gray-700 font-bold mb-2">
          Masukan:
        </label>
        <textarea
          id="masukan"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Masukan masukan Anda"
          value={masukan}
          onChange={handleMasukanChange}
        />
        <p className="text-gray-600 text-xs italic mt-2">Masukan anda: {masukan}</p>
      </div>
    </div>
  );
};

export default EventHandling;
