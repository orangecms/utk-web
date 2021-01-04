package main

import (
	"strconv"
	"syscall/js"

	"github.com/happybeing/webpack-golang-wasm-async-loader/gobridge"
)

func add(i js.Value, a []js.Value) (interface{}, error) {
	ret := 0

	for _, item := range a {
		val, _ := strconv.Atoi(item.String())
		ret += val
	}

	return js.ValueOf(ret), nil
}

func main() {
	c := make(chan struct{}, 0)
	println("Web Assembly is ready")
	gobridge.RegisterCallback("add", add)
	<-c
}
