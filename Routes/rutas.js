import express from 'express'
import { ControladorHabitacion } from '../Controllers/ControladorHabitacion.js'
import { ControladorReservas } from '../Controllers/ControladorReservas.js'
let controladorHabitacion=new ControladorHabitacion() //usando el controlador
let controladorReservas = new ControladorReservas()

export let rutasPersonalizadas=express.Router()

rutasPersonalizadas.get('/hotelesnick/habitaciones',controladorHabitacion.buscarHabitaciones)
rutasPersonalizadas.get('/hotelesnick/habitacion/:idhabitacion',controladorHabitacion.buscarHabitacionPorId)
rutasPersonalizadas.post('/hotelesnick/habitacion',controladorHabitacion.registrarHabitacion)
rutasPersonalizadas.put('/hotelesnick/habitacion/:idhabitacion',controladorHabitacion.editarHabitacion)
rutasPersonalizadas.delete('/hotelesnick/habitacion/:idhabitacion',controladorHabitacion.eliminarHabitacion)

rutasPersonalizadas.get('/hotelesnick/reservas',controladorReservas.buscarReservas)
rutasPersonalizadas.get('/hotelesnick/reserva/:idReserva',controladorReservas.buscarReservaPorId)
rutasPersonalizadas.post('/hotelesnick/reserva',controladorReservas.registrarReserva)
rutasPersonalizadas.put('/hotelesnick/reserva/:idReserva',controladorReservas.editarReserva)
rutasPersonalizadas.delete('/hotelesnick/reserva/:idReserva',controladorReservas.eliminarReserva)

