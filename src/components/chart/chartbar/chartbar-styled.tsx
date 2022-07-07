import styled from "styled-components";

export const ChartBarWrapper = styled.div`
    display: flex;
    align-items: center;
    & + & {
      margin-top: 40px;
    }
`

export const ChartBarLabel = styled.span`
  flex-basis: 200px;
`

export const ChartBarProgressWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 40px;
  background: lightgray;
`

export const ChartBarProgress = styled.div<{ readonly start: number, readonly width: number}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: aqua;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .3s;
`

export const ChartBarProgressTime = styled.span`

`