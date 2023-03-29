import React from 'react'
import { Form } from "react-bootstrap";
import '../css/usersettings.css'

export default function UserSettings() {
  return (
    <div className='SettingsContainer'>
      {/* <div className='SettingsContentLogoWrapper' /> */}
      <div className='SettingsContent'>
          <div className='SettingsTextContainer'>
            <p className='SettingsTextHeading'>
              ACCOUNT DETAILS
            </p>
          </div>
          <Form className='SettingsLabelContainer'>
            <Form.Group>
              <div className='AccountDetailsItem'>
                <Form.Label className='LabelClass'>
                  First Name
                </Form.Label>
                <Form.Control
                  className="InputClass"
                  type="text"
                  placeholder="First Name"
                  name="name" />
              </div>
              <div className='AccountDetailsItem'>
                <Form.Label className='LabelClass'>
                  Last Name
                </Form.Label>
                <Form.Control
                  className="InputClass"
                  type="text"
                  placeholder="Last Name"
                  name="name" />
              </div>
              
              
            </Form.Group>
          </Form>
        </div>
    </div>
  )
}