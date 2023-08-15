import React from "react";
import { lifecycle, withState, compose } from "recompose";
import styled from "styled-components";
import Event from "./event";

let Card = styled.div`
  padding: 20px;
  max-width: 750px;
  margin: 0 auto;
`;
export default compose(
  withState(`events`, `addEvent`, []),
  lifecycle({
    componentDidMount() {
      Object.values(this.props.eventUrls).map(async val => {
        let r = await fetch(val, { mode: `cors` });
        let { items } = await r.json();
        this.props.addEvent(s =>
          [
            ...s,
            ...(items || []).filter(
              event =>
                event.organizer &&
                +Date.now() < +new Date(event.end.dateTime || event.end.date)
            )
          ].sort(
            (a, b) =>
              +new Date(a.start.dateTime || a.start.date) -
              +new Date(b.start.dateTime || b.start.date)
          )
        );
      });
    }
  })
)(({ events }) => (
  <div>
    <Card>
      {events.map((e, i) => (
        <div key={e.id}>
          <Event event={e} />
          {i < events.length - 1 && <hr />}
        </div>
      ))}
    </Card>
  </div>
));
