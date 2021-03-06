import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Avatar } from '../../../../components'
import List from './list'

const Date = ({ children }) => new Intl.DateTimeFormat(undefined, { year: 'numeric', month: 'long' }).format(children)

const Experience = (props) => {
  const {
    className,
    title,
    client,
    dates,
    informations = [],
  } = props

  const {
    from,
    to,
  } = dates

  /* eslint-disable react/destructuring-assignment */
  return (
    <div className={className} id={`${title}-${from}`}>
      <h1>{title}</h1>

      <div className="logos">
        {client && <Avatar id={client.name} {...client} />}
        <Avatar id={props.for.name} {...props.for} />
      </div>

      <h2>
        {client && client.name
          ? (
            <Fragment>
              {client.name}
              {', pour le compte de '}
              {props.for.name}
            </Fragment>
          )
          : (
            props.for && props.for.name
          )
        }
      </h2>
      <h3>
        <Date>{from}</Date>
        {' ➤ '}
        <Date>{to}</Date>
      </h3>
      <List>{informations}</List>
    </div>
  )
}

export default styled(Experience)`
  display: grid;
  grid-template:
    "title logos"
    "title for"
    "title dates"
    "informations informations";

  & > h1 {
    grid-area: title;
    display: flex;
    align-items: center;
    margin: 0;
  }

  & > h2 {
    grid-area: for;
    margin: 0;
    margin-top: 1em;
    font-size: .8em;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  & > h3 {
    grid-area: dates;
    margin-top: 1em;
    text-align: right;
    font-size: .8em;
  }

  & > ${List} {
    grid-area: informations;
    margin-top: 1em;
    padding: 0;
    list-style: none;

    & > li {
      margin-top: 1em;
    }
  }

  & > .logos {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    & > ${Avatar} {
      width: 2.5em;
      height: 2.5em;
      font-size: 1.5em;
      transition: margin 100ms ease-in-out;
      & > .image {
        width: 70%;
      }

      &:first-child {
        margin-right: -.5em;
        z-index: 10;
      }
    }

    &:hover {
      & > ${Avatar}:first-child {
        margin-right: .1em;
      }
    }
  }

  @media (max-width: 800px) {
    grid-template:
      "title logos"
      "for for"
      "dates dates"
      "informations informations";
    grid-template-columns: auto 8em;

    & > h1 {
      font-size: 1.6em;
    }

    & > h2 {
      justify-content: flex-start;
    }

    & > h3 {
      text-align: left;
    }
  }


  @media print {
    page-break-inside: avoid;
    font-size: .9em;
  }
`
