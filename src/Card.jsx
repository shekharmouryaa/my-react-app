import React from 'react'

export const Card = ({detail}) => {
  return (
    <div>
        <div class="row g-4 py-5 ">
      <div class="feature col">
        <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          <svg class="bi" width="1em" height="1em"></svg>
        </div>
        <h3 class="fs-2 text-body-emphasis">{detail.title}</h3>
        <p>{detail.description}</p>
        <a href="#" class="icon-link">
          Call to action
          <svg class="bi"></svg>
        </a>
      </div>
      </div>
    </div>
  )
}
