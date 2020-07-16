import React from 'react';
import {Provider, darkTheme, ActionButton, Grid, View, Breadcrumbs, Item, Footer, Header, Divider, Flex, ListBox, Section, Text, TextField} from '@adobe/react-spectrum';
import Book from '@spectrum-icons/workflow/Book';
import Draw from '@spectrum-icons/workflow/Draw';
import BulkEditUsers from '@spectrum-icons/workflow/BulkEditUsers';
function App() {
  return (
    <Provider theme={darkTheme}>
      <Grid
        areas={['header  header', 'sidebar content', 'footer  footer']}
        columns={['0.5fr', '3.5fr']}
        rows={['size-1000', 'auto', 'size-1000']} 
        height='100vh'
        gap="size-100">
 
      <View  gridArea="header"> 
        <Flex
          direction="column" 
          marginStart="size-200"
          justifyContent="center"
          height="100%"> 
            <Header>VAKT</Header> 
        </Flex>
      </View>   
       
      <View gridArea="sidebar">
        <ListBox width="size-2400" aria-label="Options">
          <Section title="Trades">
            <Item textValue="Read">
              <Book size="S" />
              <Text>Paired</Text>
            </Item>
            <Item textValue="Write">
              <Draw size="S" />
              <Text>New</Text>
            </Item>
          </Section>
          <Section title="Admin">
            <Item textValue="Admin">
              <Book size="S" /> 
              <Text>Emails book</Text>
              <Text slot="description">Full access</Text>
            </Item>
            <Item textValue="User"> 
              <BulkEditUsers size="S" />
              <Text>Profile</Text> 
            </Item>
          </Section>
        </ListBox>
      </View> 

      <View gridArea="content">  
          <Breadcrumbs>
            <Item key="home">Home</Item>    
          </Breadcrumbs>
          <Divider size="S" />
          
          <Flex gap="size-150" wrap>
            <TextField label="Street address" />
            <TextField label="Street address" isRequired necessityIndicator="icon" />
            <TextField label="Street address" isRequired necessityIndicator="label" />
            <TextField label="Street address" necessityIndicator="label" />
          </Flex>

          <ActionButton margin="size-200">I'm a dark button</ActionButton>          
      </View>
 
      <View gridArea="footer"> 
        <Flex
          direction="column" 
          justifyContent="center"
          height="100%"> 
          <Footer>&copy; All rights reserved.</Footer>
        </Flex>
      </View> 

      </Grid>            
    </Provider>                     
  );
}

export default App;
