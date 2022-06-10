/* eslint-disable no-unused-vars */
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar
} from '@mui/material';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_data_warga } from '../../actions/auth';
import moment from 'moment';

const DataWarga = () => {
  const dispatch = useDispatch();
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const dataWarga = useSelector((state) => state.dataWargaReducer);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  if (!user) {
    return <div>Login terlebih dahulu untuk mengakses halaman ini</div>;
  }

  console.log(user);
  useEffect(() => {
    // setUser(JSON.parse(localStorage.getItem('profile')));
    dispatch(get_data_warga(user.result.community_id));
  }, []);

  console.log('data warga dari page ', dataWarga);
  const rows = [
    createData(
      'Al Aqsa Krisnaya Abidin',
      '082110106746',
      'Blok H3/2',
      'Pria',
      '5 Juni 2022'
    ),
    createData(
      'Pranarendra Dwikurnia',
      '082110106746',
      'Blok H3/3',
      'Pria',
      '5 Juni 2022'
    ),
    createData(
      'Muhammad Helmi Azhar',
      '082110106746',
      'Blok H3/4',
      'Pria',
      '5 Juni 2022'
    ),
    createData(
      'M Faturrahman',
      '082110106746',
      'Blok H3/5',
      'Pria',
      '5 Juni 2022'
    ),
    createData(
      'Haykal Gibran',
      '082110106746',
      'Blok H3/6',
      'Pria',
      '5 Juni 2022'
    )
  ];

  return (
    <div>
      <Typography variant="h4">Warga</Typography>
      <Typography
        variant="h6"
        style={{ color: '#9D9D9D', marginBottom: '14px' }}
      >
        Warga yang terdaftar di Rukun Tetangga
      </Typography>

      {/* Tabel warga */}
      {dataWarga.length == 0 ? (
        <div>masih loading</div>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Nama Lengkap</TableCell>
                <TableCell align="right">Nomor Telepon</TableCell>
                <TableCell align="right">Alamat Rumah</TableCell>
                <TableCell align="right">Jenis Kelamin</TableCell>
                <TableCell align="right">Akun dibuat pada</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {dataWarga.data.map((warga) => (
                <TableRow
                  key={warga.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <div
                      style={{
                        display: 'flex',
                        alignContent: 'center',
                        alignItems: 'center',
                        gap: '5px'
                      }}
                    >
                      <Avatar sx={{ width: 36, height: 36 }}>
                        {warga.namaDepan.charAt(0)}
                      </Avatar>
                      <Typography variant="body2">
                        {warga.namaDepan} {warga.namaBelakang}
                      </Typography>
                    </div>
                  </TableCell>
                  <TableCell align="right">{warga.phone}</TableCell>
                  <TableCell align="right">{warga.alamat}</TableCell>
                  <TableCell align="right">{warga.jenisKelamin}</TableCell>
                  <TableCell align="right">
                    {moment(warga.createdAt).format(
                      'dddd, MMMM Do YYYY, h:mm:ss a'
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default DataWarga;
