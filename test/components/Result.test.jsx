import {describe, expect, it} from "vitest"
import {render, screen} from '@testing-library/react'

import Result from "../../src/components/Result"

describe('Resultコンポーネント', () => {
  it('propsがSの場合', () => {
    // Resultコンポーネントのpropsが{result:S}である場合をレンダリング
    render(<Result result={{result: "S"}} />)

    // 画面上にSが表示されていることを確認
    const resultErement = screen.getByText("S")
    expect(resultErement).toBeInTheDocument()

    // Sの場合は文字色が赤色であることを確認
    expect(resultErement).toHaveStyle({
        color: "#ff0000"
    })
  })

  it('propsがAの場合', () => {
    // Resultコンポーネントのpropsが{result:A}である場合をレンダリング
    render(<Result result={{result: "A"}} />)

    // 画面上にAが表示されていることを確認
    const resultErement = screen.getByText("A")
    expect(resultErement).toBeInTheDocument()

    // Aの場合は文字色が青色であることを確認
    expect(resultErement).toHaveStyle({
        color: "#0000ff"
    })
  })

  it('propsがBの場合', () => {
    // Resultコンポーネントのpropsが{result:B}である場合をレンダリング
    render(<Result result={{result: "B"}} />)

    // 画面上にBが表示されていることを確認
    const resultErement = screen.getByText("B")
    expect(resultErement).toBeInTheDocument()

    // Bの場合は文字色が緑色であることを確認
    expect(resultErement).toHaveStyle({
        color: "#00ff00"
    })
  })

  it('propsがCの場合', () => {
    // Resultコンポーネントのpropsが{result:C}である場合をレンダリング
    render(<Result result={{result: "C"}} />)

    // 画面上にCが表示されていることを確認
    const resultErement = screen.getByText("C")
    expect(resultErement).toBeInTheDocument()

    // Cの場合は文字色が灰色であることを確認
    expect(resultErement).toHaveStyle({
        color: "#666666"
    })
  })
})
