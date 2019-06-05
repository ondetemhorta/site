import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function Register({ login, save, isAdmin }) {
  const inputs = {
    name: 'name',
    latitude: 'latitude',
    longitude: 'longitude'
  }

  const [value, setValue] = useState({
    [inputs.name]: '',
    [inputs.latitude]: '',
    [inputs.longitude]: ''
  })

  const onChange = id => ({ target }) =>
    setValue(state => ({
      ...state,
      [id]: target.value
    }))

  return (
    <>
      <div>
        <button onClick={login}>login</button>

        {isAdmin && (
          <div>
            <input
              onChange={onChange(inputs.name)}
              value={value[inputs.name]}
              type="text"
              placeholder="Nome"
            />
            <input
              onChange={onChange(inputs.latitude)}
              value={value[inputs.latitude]}
              type="text"
              placeholder="Latitude"
            />
            <input
              onChange={onChange(inputs.longitude)}
              value={value[inputs.longitude]}
              type="text"
              placeholder="Longitude"
            />

            <button onClick={() => save(value)}>Salvar</button>
          </div>
        )}
      </div>
    </>
  )
}

const mapState = state => ({
  isAdmin: state.auth.isAdmin
})

const mapDispatch = dispatch => ({
  login: dispatch.auth.doLogin,
  save: garden => dispatch.register.save(garden)
})

Register.propTypes = {
  login: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired
}

export default connect(
  mapState,
  mapDispatch
)(Register)
