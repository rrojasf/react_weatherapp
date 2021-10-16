const rewire = require("rewire")
const WeatherTemperature = rewire("./WeatherTemperature")
const stateToIconName = WeatherTemperature.__get__("stateToIconName")
// @ponicode
describe("stateToIconName", () => {
    test("0", () => {
        let callFunction = () => {
            stateToIconName("DRIZZLE")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            stateToIconName("RAIN")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            stateToIconName("SUN")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            stateToIconName("WINDY")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            stateToIconName("CLOUD")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            stateToIconName(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
