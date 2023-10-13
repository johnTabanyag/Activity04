import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import PagerView from "react-native-pager-view";
import * as Speech from "expo-speech";
import { StatusBar } from "react-native";
import { ScrollView } from "react-native";
import {
  Avatar,
  Badge,
  Banner,
  Button,
  Card,
  Checkbox,
  Chip,
  DataTable,
  Divider,
  HelperText,
  TextInput,
  IconButton,
  MD3Colors,
  List,
  RadioButton,
  SegmentedButtons,
  ToggleButton,
  Switch,
  Snackbar,
} from "react-native-paper";
export default function Home() {
  const [visible, setVisible] = React.useState(true);
  const LeftContent = (props) => <Avatar.Icon {...props} icon="heart" />;
  const [text, setText] = React.useState("");
  const [expanded, setExpanded] = React.useState(true);
  const [value, setValue] = React.useState("first");
  const handlePress = () => setExpanded(!expanded);
  const onChangeText = (text) => setText(text);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [values, setValues] = React.useState("");
  const [value1, setValue1] = React.useState("left");
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [visible1, setVisible1] = React.useState(false);

  const onToggleSnackBar = () => setVisible1(!visible1);

  const onDismissSnackBar = () => setVisible1(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const onChangeSearch = (query) => setSearchQuery(query);
  const hasErrors = () => {
    return !text.includes("@");
  };
  const speak = () => {
    const thingToSay = "Welcome To React Native Components";
    Speech.speak(thingToSay);
  };
  const numberOfItemsPerPageList = [2, 3, 4];

  const items = [
    {
      key: 1,
      name: "Page 1",
    },
    {
      key: 2,
      name: "Page 2",
    },
    {
      key: 3,
      name: "Page 3",
    },
  ];
  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );
  const from = page * numberOfItemsPerPage;
  const to = Math.min((page + 1) * numberOfItemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
    speak();
  }, [numberOfItemsPerPage]);
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#FFC100"
        barStyle="dark-content"
        translucent={false}
      />
      <View style={styles.head}>
        <Text style={styles.title}>React Native</Text>
      </View>

      <PagerView style={styles.viewPager} initialPage={0}>
        <View style={styles.containers} key="1">
          <ScrollView contentContainerStyle={styles.containers}>
            <View style={styles.row}>
              <Text style={styles.text}>Avatar</Text>
              <View style={styles.rows}>
                <Avatar.Icon size={50} icon="heart" />
                <Avatar.Image
                  size={50}
                  source={require("../assets/favicon.png")}
                />
                <Avatar.Text size={50} label="JT" />
              </View>
            </View>

            <View style={styles.row}>
              <Text style={styles.text}>Switch</Text>
              <View style={styles.rows}>
                <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
                <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
              </View>
            </View>

            <View style={styles.row}>
              <Text style={styles.text}>RadioButton</Text>
              <View style={styles.rows3}>
                <RadioButton.Group
                  onValueChange={(value) => setValue(value)}
                  value={value}
                >
                  <RadioButton.Item label="BSIT" value="first" />
                  <RadioButton.Item label="BSCS" value="second" />
                  <RadioButton.Item label="BSCRIM" value="third" />
                </RadioButton.Group>
              </View>
            </View>

            <View style={styles.row}>
              <Text style={styles.text}>Snackbar</Text>
              <View style={styles.rows}>
                <Button mode="outlined" onPress={onToggleSnackBar}>
                  {visible1 ? "Hide" : "Show"}
                </Button>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Chip</Text>
              <View style={styles.rows2}>
                <Chip icon="information" onPress={() => console.log("Pressed")}>
                  Information
                </Chip>
                <Chip
                  icon="heart"
                  mode="outlined"
                  onPress={() => console.log("Pressed")}
                >
                  Follow
                </Chip>
                <Chip
                  icon="account"
                  mode="outlined"
                  onPress={() => console.log("Pressed")}
                >
                  Account
                </Chip>
                <Chip
                  icon="account"
                  mode="outlined"
                  onPress={() => console.log("Pressed")}
                >
                  Person
                </Chip>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.containers} key="2">
        <ScrollView contentContainerStyle={styles.containers}>
          <View style={styles.row}>
            <Text style={styles.text}>Checkbox</Text>
            <View style={styles.rows}>
              <Checkbox.Item label="Apple" status="unchecked" />
              <Checkbox.Item label="Mango" status="checked" />
              <Checkbox.Item label="Grape" status="unchecked" />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>HelperText</Text>
            <View style={styles.rows3}>
              <TextInput
                label="Email"
                value={text}
                onChangeText={onChangeText}
              />
              <HelperText type="error" visible={hasErrors()}>
                Email address is invalid!
              </HelperText>
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.text}>Badge</Text>
            <View style={styles.rows}>
              <Badge>13</Badge>
              <Badge>15</Badge>
              <Badge>47</Badge>
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.text}>List</Text>
            <View style={styles.rows3}>
              <List.Section title="Accordions">
                <List.Accordion
                  title="Fruit"
                  left={(props) => <List.Icon {...props} icon="folder" />}
                >
                  <List.Item title="Guava" />
                  <List.Item title="Mango" />
                </List.Accordion>

                <List.Accordion
                  title="Vegetables"
                  left={(props) => <List.Icon {...props} icon="folder" />}
                  expanded={expanded}
                  onPress={handlePress}
                >
                  <List.Item title="Squash" />
                  <List.Item title="Batong" />
                </List.Accordion>
              </List.Section>
            </View>
          </View>
          </ScrollView>
        </View>
        <View style={styles.containers} key="3">
        <ScrollView contentContainerStyle={styles.containers}>
          <View style={styles.row}>
            <Text style={styles.text}>DataTable</Text>
            <View style={styles.rows3}>
              <DataTable.Row>
                <DataTable.Cell numeric>1</DataTable.Cell>
                <DataTable.Cell numeric>2</DataTable.Cell>
                <DataTable.Cell numeric>3</DataTable.Cell>
                <DataTable.Cell numeric>4</DataTable.Cell>
              </DataTable.Row>
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title sortDirection="descending">
                    Dessert
                  </DataTable.Title>
                  <DataTable.Title numeric>Calories</DataTable.Title>
                  <DataTable.Title numeric>Fat (g)</DataTable.Title>
                </DataTable.Header>
              </DataTable>
              <DataTable>
                <DataTable.Pagination
                  page={page}
                  numberOfPages={Math.ceil(items.length / numberOfItemsPerPage)}
                  onPageChange={(page) => setPage(page)}
                  label={`${from + 1}-${to} of ${items.length}`}
                  showFastPaginationControls
                  numberOfItemsPerPageList={numberOfItemsPerPageList}
                  numberOfItemsPerPage={numberOfItemsPerPage}
                  onItemsPerPageChange={onItemsPerPageChange}
                  selectPageDropdownLabel={"Rows per page"}
                />
              </DataTable>
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.text}>Divider</Text>
            <View style={styles.rows3}>
              <Text>France</Text>
              <Divider />
              <Text>Usa</Text>
              <Divider />
              <Text>Philippines</Text>
              <Divider />
              <Text>Japan</Text>
              <Divider />
              <Text>India</Text>
              <Divider />
              <Text>China</Text>
              <Divider />
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.text}>IconButton</Text>
            <View style={styles.rows}>
              <IconButton
                icon="camera"
                iconColor={MD3Colors.error50}
                size={20}
                onPress={() => console.log("Pressed")}
              />
              <IconButton
                icon="home"
                iconColor={MD3Colors.error50}
                size={20}
                onPress={() => console.log("Pressed")}
              />
              <IconButton
                icon="account"
                iconColor={MD3Colors.error50}
                size={20}
                onPress={() => console.log("Pressed")}
              />
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.text}>SegmentedButtons</Text>
            <View style={styles.rows3}>
              <SegmentedButtons
                value={values}
                onValueChange={setValues}
                buttons={[
                  {
                    value: "jump",
                    label: "BSIT",
                  },
                  {
                    value: "walk",
                    label: "BSCS",
                  },
                  { value: "swim", label: "BSCRIM" },
                ]}
              />
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>ToggleButton</Text>
            <View style={styles.rows}>
              <ToggleButton.Row
                onValueChange={(value) => setValue1(value)}
                value={value1}
              >
                <ToggleButton icon="format-align-left" value="left" />
                <ToggleButton icon="format-align-right" value="right" />
              </ToggleButton.Row>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>TextInput</Text>
            <View style={styles.rows3}>
              <TextInput
                label="Password"
                secureTextEntry
                right={<TextInput.Icon icon="eye" />}
              />
            </View>
          </View>
          </ScrollView>
        </View>
      </PagerView>
      <Snackbar
        visible={visible1}
        onDismiss={onDismissSnackBar}
        action={{
          label: "Undo",
          onPress: () => {
            // Do something
          },
        }}
      >
        Hey there! I'm a Snackbar.
      </Snackbar>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF1E4",
  },
  containers: {
    backgroundColor: "#FAF1E4",
    padding: 5,
    gap: 5,
  },
  head: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFC100",
  },
  row: {
    flexDirection: "column",
    borderWidth: 0.5,
    borderColor: "#0F2C59",
    height: "auto",
    alignItems: "center",
  },
  rows: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5,
    width: "100%",
  },
  rows3: {
    flexDirection: "column",
    justifyContent: "space-around",
    padding: 5,
    width: "100%",
  },
  rows1: {
    flexDirection: "column",
    justifyContent: "space-around",
    padding: 5,
    width: "100%",
  },
  rows2: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5,
    width: "100%",
    flexWrap: "wrap",
    gap: 10,
  },
  text: {
    borderWidth: 0.5,
    width: "100%",
    textAlign: "center",
    backgroundColor: "#FFC100",
    fontSize: 20,
    textDecorationLine: 'underline'
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  search: {
    backgroundColor: "#F8F0E5",
    marginTop: 5,
  },
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
});
