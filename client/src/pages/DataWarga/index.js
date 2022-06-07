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

import React from 'react';

const DataWarga = () => {
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nama Lengkap</TableCell>
              <TableCell align="right">Nomor Telepon</TableCell>
              <TableCell align="right">Alamat Rumah</TableCell>
              <TableCell align="right">Jenis Kelamin</TableCell>
              <TableCell align="right">Akun dibuat pada</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
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
                      {row.name.charAt(0)}
                    </Avatar>
                    <Typography variant="body2">{row.name}</Typography>
                  </div>
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DataWarga;
